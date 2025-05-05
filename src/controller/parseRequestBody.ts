interface ValidRequestBody{
    [property: string]: any;
}

const parseRequestBody = (requestBody: unknown, typeProperties: string[]) => {
    const requestBodyVerified = requestBody != undefined ? requestBody as ValidRequestBody : {};
    let returnObj: ValidRequestBody | { erro: string } = requestBodyVerified;
    let missingProperties = '';

    for (let element of typeProperties) {
        if (!(element in requestBodyVerified)){
            if(missingProperties == ''){
                missingProperties += `'${element}'`;
            }else{
                missingProperties += `, '${element}'`;
            }
        }
    }

    if (missingProperties != ''){
        returnObj = { erro: { success: false, msg: `As propriedades ${missingProperties} estão faltando no request.body`} };
    }
    
    return returnObj;
};

export default parseRequestBody;