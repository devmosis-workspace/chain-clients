import { BinaryWriter } from "../../../binary";
/** DepositParams defines the parameters for the x/gov module */
export interface DepositParams {
    /**
     * min_initial_deposit_rate minimum % of TotalDeposit
     * author of the proposal must put in order for proposal tx to be committed
     */
    minInitialDepositRate: Uint8Array;
}
export interface DepositParamsProtoMsg {
    typeUrl: "/akash.gov.v1beta3.DepositParams";
    value: Uint8Array;
}
/** DepositParams defines the parameters for the x/gov module */
export interface DepositParamsAmino {
    /**
     * min_initial_deposit_rate minimum % of TotalDeposit
     * author of the proposal must put in order for proposal tx to be committed
     */
    min_initial_deposit_rate?: string;
}
export interface DepositParamsAminoMsg {
    type: "/akash.gov.v1beta3.DepositParams";
    value: DepositParamsAmino;
}
/** DepositParams defines the parameters for the x/gov module */
export interface DepositParamsSDKType {
    min_initial_deposit_rate: Uint8Array;
}
export declare const DepositParams: {
    typeUrl: string;
    encode(message: DepositParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DepositParams;
    fromPartial(object: Partial<DepositParams>): DepositParams;
    fromAmino(object: DepositParamsAmino): DepositParams;
    toAmino(message: DepositParams): DepositParamsAmino;
    fromAminoMsg(object: DepositParamsAminoMsg): DepositParams;
    fromProtoMsg(message: DepositParamsProtoMsg): DepositParams;
    toProto(message: DepositParams): Uint8Array;
    toProtoMsg(message: DepositParams): DepositParamsProtoMsg;
};
