import { Escrow, EscrowSDKType } from "./types";
import { Params, ParamsSDKType } from "./params";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the Escrow module's genesis state */
export interface GenesisState {
    escrows: Escrow[];
    lastBlockTime: Long;
    nextEscrowId: Long;
    params?: Params;
}
/** GenesisState defines the Escrow module's genesis state */
export interface GenesisStateSDKType {
    escrows: EscrowSDKType[];
    last_block_time: Long;
    next_escrow_id: Long;
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
