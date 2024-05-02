import { Rpc } from "../../../helpers";
import { MsgRegister, MsgRegisterResponse, MsgDeregister, MsgDeregisterResponse, MsgSetRegistry, MsgSetRegistryResponse } from "./tx";
export interface Msg {
    register(request: MsgRegister): Promise<MsgRegisterResponse>;
    deregister(request: MsgDeregister): Promise<MsgDeregisterResponse>;
    setRegistry(request: MsgSetRegistry): Promise<MsgSetRegistryResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    register(request: MsgRegister): Promise<MsgRegisterResponse>;
    deregister(request: MsgDeregister): Promise<MsgDeregisterResponse>;
    setRegistry(request: MsgSetRegistry): Promise<MsgSetRegistryResponse>;
}
