import { Rpc } from "../../../helpers";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse, MsgSetBeforeSendHook, MsgSetBeforeSendHookResponse, MsgForceTransfer, MsgForceTransferResponse } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    mint(request: MsgMint): Promise<MsgMintResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
    setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
    setBeforeSendHook(request: MsgSetBeforeSendHook): Promise<MsgSetBeforeSendHookResponse>;
    forceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    mint(request: MsgMint): Promise<MsgMintResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
    setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
    setBeforeSendHook(request: MsgSetBeforeSendHook): Promise<MsgSetBeforeSendHookResponse>;
    forceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
}
