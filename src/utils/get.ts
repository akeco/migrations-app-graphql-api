const get = (obj: {}, path: string, defaultValue: any) => {
    const travel: Function = (regexp: string) : Function =>
        String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce((res: any, key: string) => (res !== null && res !== undefined ? res[key] : res), obj);
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
};

module.exports = get;