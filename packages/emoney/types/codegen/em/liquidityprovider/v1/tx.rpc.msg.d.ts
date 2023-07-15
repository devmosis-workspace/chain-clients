import { Rpc } from "../../../helpers";
import { MsgMintTokens, MsgMintTokensResponse, MsgBurnTokens, MsgBurnTokensResponse } from "./tx";
export interface Msg {
    mintTokens(request: MsgMintTokens): Promise<MsgMintTokensResponse>;
    burnTokens(request: MsgBurnTokens): Promise<MsgBurnTokensResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    mintTokens(request: MsgMintTokens): Promise<MsgMintTokensResponse>;
    burnTokens(request: MsgBurnTokens): Promise<MsgBurnTokensResponse>;
}
