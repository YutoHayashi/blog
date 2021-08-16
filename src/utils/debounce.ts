/**
 * debounce
 * @param fn コールバック関数
 * @param delay 遅延時間(ms)
 * @returns イベントハンドラ
 */
export const debounce = ( fn: (  ) => void, delay: number, ) => {
    let tID: ReturnType<typeof setTimeout>;
    return ( e: Event, ) => {
        if ( tID ) clearTimeout( tID );
        tID = setTimeout( (  ) => {
            Reflect.apply( fn, undefined, [  ] );
        }, delay);
    };
};
