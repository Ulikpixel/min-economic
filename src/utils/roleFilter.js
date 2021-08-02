export const roleFilter = (string) => {
    if(string === "GLOBAL_ADMIN") return 2
    if(string === "USER") return 0
    return 1
};

