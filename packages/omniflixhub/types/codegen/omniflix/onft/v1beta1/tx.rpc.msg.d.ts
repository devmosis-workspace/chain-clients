import { Rpc } from "../../../helpers";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgUpdateDenom, MsgUpdateDenomResponse, MsgTransferDenom, MsgTransferDenomResponse, MsgPurgeDenom, MsgPurgeDenomResponse, MsgMintONFT, MsgMintONFTResponse, MsgTransferONFT, MsgTransferONFTResponse, MsgBurnONFT, MsgBurnONFTResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export interface Msg {
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    updateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
    transferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
    purgeDenom(request: MsgPurgeDenom): Promise<MsgPurgeDenomResponse>;
    mintONFT(request: MsgMintONFT): Promise<MsgMintONFTResponse>;
    transferONFT(request: MsgTransferONFT): Promise<MsgTransferONFTResponse>;
    burnONFT(request: MsgBurnONFT): Promise<MsgBurnONFTResponse>;
    /**
     * UpdateParams defines a governance operation for updating the onft module
     * parameters. The authority is hard-coded to the onft module account.
     *
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    updateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
    transferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
    purgeDenom(request: MsgPurgeDenom): Promise<MsgPurgeDenomResponse>;
    mintONFT(request: MsgMintONFT): Promise<MsgMintONFTResponse>;
    transferONFT(request: MsgTransferONFT): Promise<MsgTransferONFTResponse>;
    burnONFT(request: MsgBurnONFT): Promise<MsgBurnONFTResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
