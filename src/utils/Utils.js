
function Utils(props) {
    
    const isDevice = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);

    return { isDevice };
}

export default Utils;