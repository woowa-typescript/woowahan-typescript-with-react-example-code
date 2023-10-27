const alert = (meesage: string, {onClose}: {onClose?: () => void}) => {}

const onActionError = ( error: unknown, params?: Omit<AlertPopup, “type” | “message”>) => {
    if (error instanceof UnauthorizedError) {
        onUnauthorizedError(
            error.message, errorCallback?.onUnauthorizedErrorCallback
        );
    } else if (error instanceof NetworkError) {
        alert("네트워크 연결이 원활하지 않습니다. 잠시 후 다시 시도해주세요.", {onClose: errorCallback?.onNetworkErrorCallback, });
    } else if (error instanceof OrderHttpError) {
        alert(error.message, params);
    } else if (error instanceof Error) {
        alert(error.message, params);
    } else {
        alert(defaultHttpErrorMessage, params);
    }

    const getOrderHistory = async (page: number): Promise<History> => {
        try {
            const { data } = await fetchOrderHistory({ page }); const history = await JSON.parse(data);

            return history;
        } catch (error) {
            onActionError(error);
        }
    };
};