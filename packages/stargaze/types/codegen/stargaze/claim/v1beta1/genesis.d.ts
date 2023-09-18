import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./claim_record";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
    /**
     * this line is used by starport scaffolding # genesis/proto/state
     * balance of the claim module's account
     */
    moduleAccountBalance: Coin;
    /** params defines all the parameters of the module. */
    params: Params;
    /** list of claim records, one for every airdrop recipient */
    claimRecords: ClaimRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the claim module's genesis state. */
export interface GenesisStateAmino {
    /**
     * this line is used by starport scaffolding # genesis/proto/state
     * balance of the claim module's account
     */
    module_account_balance?: CoinAmino;
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    /** list of claim records, one for every airdrop recipient */
    claim_records: ClaimRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/publicawesome.stargaze.claim.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the claim module's genesis state. */
export interface GenesisStateSDKType {
    module_account_balance: CoinSDKType;
    params: ParamsSDKType;
    claim_records: ClaimRecordSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
