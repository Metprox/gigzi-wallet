export const fabricAll = (list, id) => {
    const answer = list.find(item => item.id === id);
    const result = { value: answer.value, currency: answer.currency };
    return result;
};

export const fabricOnce = (list, id) => {
    const answer = list.find(item => item.id === id);
    const result = { value: answer.value };
    return result;
};

export const FabricFlag = flagValue => {
    switch (flagValue) {
        case 'USD':
            return {
                flag: <ENG />,
            };
        case 'ENG':
            return {
                flag: <ENG />,
            };
        case 'EUR':
            return {
                flag: <EUR />,
            };
        case 'GBP':
            return {
                flag: <GBP />,
            };
        case 'CAD':
            return {
                flag: <CAD />,
            };
        case 'CHN':
            return {
                flag: <CHN />,
            };
        case 'INR':
            return {
                flag: <INR />,
            };
        case 'JPN':
            return {
                flag: <JPN />,
            };
        case 'CHF':
            return {
                flag: <CHF />,
            };
        case 'PLN':
            return {
                flag: <PLN />,
            };
        case 'BRL':
            return {
                flag: <BRL />,
            };
        case 'MXN':
            return {
                flag: <MXN />,
            };
        case 'UAH':
            return {
                flag: <UAH />,
            };
        case 'SEK':
            return {
                flag: <SEK />,
            };
        case 'TRY':
            return {
                flag: <TRY />,
            };
        case 'AED':
            return {
                flag: <AED />,
            };
        case 'RUS':
            return {
                flag: <RUS />,
            };
        case 'DEU':
            return {
                flag: <DEU />,
            };
        case 'SPA':
            return {
                flag: <SPA />,
            };
        case 'ITA':
            return {
                flag: <ITA />,
            };
        case 'FRA':
            return {
                flag: <FRA />,
            };
        case 'AUD':
            return {
                flag: <AUD />,
            };
        default:
            return {};
    }
};
