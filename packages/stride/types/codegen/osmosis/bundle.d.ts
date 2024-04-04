import * as _126 from "./gamm/v1beta1/osmosis";
export declare namespace osmosis {
    namespace gamm {
        const v1beta1: {
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _126.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_126.MsgSwapExactAmountIn>): _126.MsgSwapExactAmountIn;
                fromAmino(object: _126.MsgSwapExactAmountInAmino): _126.MsgSwapExactAmountIn;
                toAmino(message: _126.MsgSwapExactAmountIn): _126.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _126.MsgSwapExactAmountInAminoMsg): _126.MsgSwapExactAmountIn;
                toAminoMsg(message: _126.MsgSwapExactAmountIn): _126.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _126.MsgSwapExactAmountInProtoMsg): _126.MsgSwapExactAmountIn;
                toProto(message: _126.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _126.MsgSwapExactAmountIn): _126.MsgSwapExactAmountInProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _126.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.SwapAmountInRoute;
                fromPartial(object: Partial<_126.SwapAmountInRoute>): _126.SwapAmountInRoute;
                fromAmino(object: _126.SwapAmountInRouteAmino): _126.SwapAmountInRoute;
                toAmino(message: _126.SwapAmountInRoute): _126.SwapAmountInRouteAmino;
                fromAminoMsg(object: _126.SwapAmountInRouteAminoMsg): _126.SwapAmountInRoute;
                toAminoMsg(message: _126.SwapAmountInRoute): _126.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _126.SwapAmountInRouteProtoMsg): _126.SwapAmountInRoute;
                toProto(message: _126.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _126.SwapAmountInRoute): _126.SwapAmountInRouteProtoMsg;
            };
            OsmosisTwapRecord: {
                typeUrl: string;
                encode(message: _126.OsmosisTwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.OsmosisTwapRecord;
                fromPartial(object: Partial<_126.OsmosisTwapRecord>): _126.OsmosisTwapRecord;
                fromAmino(object: _126.OsmosisTwapRecordAmino): _126.OsmosisTwapRecord;
                toAmino(message: _126.OsmosisTwapRecord): _126.OsmosisTwapRecordAmino;
                fromAminoMsg(object: _126.OsmosisTwapRecordAminoMsg): _126.OsmosisTwapRecord;
                toAminoMsg(message: _126.OsmosisTwapRecord): _126.OsmosisTwapRecordAminoMsg;
                fromProtoMsg(message: _126.OsmosisTwapRecordProtoMsg): _126.OsmosisTwapRecord;
                toProto(message: _126.OsmosisTwapRecord): Uint8Array;
                toProtoMsg(message: _126.OsmosisTwapRecord): _126.OsmosisTwapRecordProtoMsg;
            };
        };
    }
}
