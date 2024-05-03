import { Rpc } from "../../../helpers";
import { MsgRegisterEVMAddress, MsgRegisterEVMAddressResponse } from "./tx";
/** Msg is the message server for receiving qgb transactions */
export interface Msg {
    /**
     * RegisterEVMAddress records an evm address for the validator which is used
     * by the relayer to aggregate signatures. A validator can only register a
     * single EVM address. The EVM address can be overridden by a later message.
     * There are no validity checks of the EVM addresses existence on the Ethereum
     * state machine.
     */
    registerEVMAddress(request: MsgRegisterEVMAddress): Promise<MsgRegisterEVMAddressResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerEVMAddress(request: MsgRegisterEVMAddress): Promise<MsgRegisterEVMAddressResponse>;
}
