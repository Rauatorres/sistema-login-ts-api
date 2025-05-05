"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseRequestBody = (requestBody, typeProperties) => {
    const requestBodyVerified = requestBody != undefined ? requestBody : {};
    let returnObj = requestBodyVerified;
    let missingProperties = '';
    for (let element of typeProperties) {
        if (!(element in requestBodyVerified)) {
            if (missingProperties == '') {
                missingProperties += `'${element}'`;
            }
            else {
                missingProperties += `, '${element}'`;
            }
        }
    }
    if (missingProperties != '') {
        returnObj = { erro: { success: false, msg: `As propriedades ${missingProperties} estão faltando no request.body` } };
    }
    return returnObj;
};
exports.default = parseRequestBody;
