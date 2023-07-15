import { Rpc } from "../../../helpers";
import { MsgCreateProvider, MsgCreateProviderResponse, MsgUpdateProvider, MsgUpdateProviderResponse, MsgDeleteProvider, MsgDeleteProviderResponse } from "./provider";
/** Msg defines the provider Msg service */
export interface Msg {
    /** CreateProvider defines a method that creates a provider given the proper inputs */
    createProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponse>;
    /** UpdateProvider defines a method that updates a provider given the proper inputs */
    updateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse>;
    /** DeleteProvider defines a method that deletes a provider given the proper inputs */
    deleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponse>;
    updateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse>;
    deleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse>;
}
