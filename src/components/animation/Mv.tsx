import React, { useEffect, ReactElement } from 'react';
import { debounce } from '@/utils/debounce';

interface Props {
    height: string;
    width: string;
    bg: string;
    color: string;
}
interface States {}

const DefaultProps: Props = {
    height: '100vh',
    width: '100%',
    bg: '#111',
    color: '#FFFFFF',
};

export const Mv: React.FunctionComponent<Partial<Props>> = ( _props: React.PropsWithChildren<Partial<Props>> = {  } ): ReactElement => {

    const _wrapper: React.RefObject<HTMLDivElement> = React.createRef(  );
    const _canvas: React.RefObject<HTMLCanvasElement> = React.createRef(  );
    let _animationFrame: number = 0;
    const props: React.PropsWithChildren<Props> = { ...Object.assign( DefaultProps ), ..._props };
    const { height, width, bg, color } = props;

    const LINE_WIDTH = .1 as const;
    const RADIUS = 1 as const;
    let REACTION_DISTANCE = 80;
    const NUMBER_OF_DOTTS = 40 as const;
    let SPEED = 10;

    /**
     * 定義域と値域からxに関しての一次関数を返す
     * @param { [ number, number ] } domain 定義域 x
     * @param { [ number, number ] } range 値域 y
     * @returns 関数
     */
    const createMapper = ( domain: [ number, number ], range: [ number, number ] ) => {
        return ( x: number ) => {
            return ( x - domain[ 0 ] ) * ( ( range[ 1 ] - range[ 0 ] ) / ( domain[ 1 ] - domain[ 0 ] ) ) + domain[ 0 ];
        };
    };

    let _mapperX: ReturnType<typeof createMapper> = x => x;
    let _mapperY: ReturnType<typeof createMapper> = y => y;

    const resizeCanvas = (  ) => {
        const [ height, width ] = [ _wrapper.current?.clientHeight, _wrapper.current?.clientWidth ];
        if ( _canvas.current && height !== undefined && width !== undefined ) {
            _canvas.current.height = height;
            _canvas.current.width = width;
            _mapperY = createMapper( [ 0, 100 ], [ 0, height ] );
            _mapperX = createMapper( [ 0, 100 ], [ 0, width ] );
            SPEED = width / 10;
            // REACTION_DISTANCE = width / 8;
        }
    };

    const dott = (  ) => {
        let x: number = Math.floor( Math.random(  ) * 100 );
        let y: number = Math.floor( Math.random(  ) * 100 );
        let speed: number = Math.random(  ) / 100 * SPEED;
        const theta: number = Math.floor( Math.random(  ) * 91 );
        let vectorX: boolean = Math.random(  ) > .5;
        let vectorY: boolean = Math.random(  ) > .5;
        const radius = 2;
        return {
            x: (  ) => x,
            y: (  ) => y,
            next: (  ) => {
                x += Math.cos( theta ) * ( vectorX ? 1 : -1 ) * speed;
                y += Math.sin( theta ) * ( vectorY ? 1 : -1 ) * speed;
                if ( x < 0 || 100 < x ) vectorX = !vectorX;
                if ( y < 0 || 100 < y ) vectorY = !vectorY;
            },
            render: ( _canvasContext: CanvasRenderingContext2D ) => {
                _canvasContext.beginPath(  );
                _canvasContext.ellipse( _mapperX( x ), _mapperY( y ), RADIUS, RADIUS, Math.PI, 0, Math.PI * 2 );
                _canvasContext.closePath(  );
                _canvasContext.fill(  );
            },
            line: ( _canvasContext: CanvasRenderingContext2D ) => {
                dotts.forEach( _dott => {
                    const distance = Math.sqrt( Math.pow( _mapperX( _dott.x(  ) - x ), 2 ) + Math.pow( _mapperY( _dott.y(  ) - y ), 2 ) )
                    if ( distance <= REACTION_DISTANCE ) {
                        _canvasContext.globalAlpha = 1 - distance / REACTION_DISTANCE;
                        _canvasContext.beginPath(  );
                        _canvasContext.moveTo( _mapperX( x ), _mapperY( y ) );
                        _canvasContext.lineTo( _mapperX( _dott.x(  ) ), _mapperY( _dott.y(  ) ) );
                        _canvasContext.closePath(  );
                        _canvasContext.stroke(  );
                    }
                }, );
            },
        }
    };

    const dotts: Array<ReturnType<typeof dott>> = Array.from( Array( NUMBER_OF_DOTTS ) ).map( _ => ( dott(  ) ) );

    const drawCanvas = ( _: CanvasRenderingContext2D ) => {
        _.fillStyle = bg;
        _.fillRect( 0, 0, _mapperX( 100 ), _mapperY( 100 ) );
        _.fillStyle = color;
        _.lineWidth = LINE_WIDTH;
        _.strokeStyle = color;
        dotts.forEach( dott => {
            dott.next(  );
            dott.render( _ );
            dotts.forEach( _dott => dott.line( _ ) );
            _.globalAlpha = 1;
        }, );
        _animationFrame = window.requestAnimationFrame( (  ) => drawCanvas( _ ), );
    };

    const init = (  ) => {
        const _canvasContext: CanvasRenderingContext2D | null | undefined = _canvas.current?.getContext( '2d' );
        if ( _canvasContext === null || _canvasContext === undefined ) return;
        const _animation = (  ) => {
            window.cancelAnimationFrame( _animationFrame );
            resizeCanvas(  );
            drawCanvas( _canvasContext );
        };
        _animation(  );
        window.addEventListener( 'resize', debounce( _animation, 1000 ), false );
    };

    /**
     * 初期化
     */
    useEffect( init, [  ] );

    return (
        <div ref={ _wrapper } className={ `mv` } style={ { height, width } }>
            <canvas ref={ _canvas } />
        </div>
    );

}
