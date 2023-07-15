import { Params, ParamsSDKType } from "./params";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisState {
    /** params is the container of cosmwasmpool parameters. */
    params?: Params;
    pools: Any[];
}
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    pools: AnySDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
