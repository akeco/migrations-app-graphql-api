export const logInput = async (resolve: Function, root: any, args: any, context: any, info: any): Promise<{}> => {
    //console.log(`1. logInput: ${JSON.stringify(args)}`);
    const result: {} = await resolve(root, args, context, info);
    //console.log(`5. logInput`);
    return result;
};

export const logResult = async (resolve: Function, root: any, args: any, context: any, info: any): Promise<{}> => {
    //console.log(`2. logResult`);
    const result: {} = await resolve(root, args, context, info);
    console.log("RES", result)
    //console.log(`4. logResult: ${JSON.stringify(result)}`);
    return result;
};