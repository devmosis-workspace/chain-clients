import { Rpc } from "../../../helpers";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    mint(request: MsgMint): Promise<MsgMintResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
    setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    mint(request: MsgMint): Promise<MsgMintResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
    setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
