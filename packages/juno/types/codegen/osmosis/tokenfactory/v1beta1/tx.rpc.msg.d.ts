import { Rpc } from "../../../helpers";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse, MsgForceTransfer, MsgForceTransferResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    mint(request: MsgMint): Promise<MsgMintResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
    setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
    forceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/mint module
     * parameters. The authority is hard-coded to the x/gov module account.
     *
     * Since: cosmos-sdk 0.47
     */
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
    forceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
