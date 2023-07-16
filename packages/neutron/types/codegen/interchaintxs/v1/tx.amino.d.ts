import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterInterchainAccount, MsgSubmitTx } from "./tx";
export interface MsgRegisterInterchainAccountAminoType extends AminoMsg {
    type: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount";
    value: {
        from_address: string;
        connection_id: string;
        interchain_account_id: string;
    };
}
export interface MsgSubmitTxAminoType extends AminoMsg {
    type: "/neutron.interchaintxs.v1.MsgSubmitTx";
    value: {
        from_address: string;
        interchain_account_id: string;
        connection_id: string;
        msgs: {
            type_url: string;
            value: Uint8Array;
        }[];
        memo: string;
        timeout: string;
        fee: {
            recv_fee: {
                denom: string;
                amount: string;
            }[];
            ack_fee: {
                denom: string;
                amount: string;
            }[];
            timeout_fee: {
                denom: string;
                amount: string;
            }[];
        };
    };
}
export declare const AminoConverter: {
    "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, connectionId, interchainAccountId }: MsgRegisterInterchainAccount) => MsgRegisterInterchainAccountAminoType["value"];
        fromAmino: ({ from_address, connection_id, interchain_account_id }: MsgRegisterInterchainAccountAminoType["value"]) => MsgRegisterInterchainAccount;
    };
    "/neutron.interchaintxs.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: ({ fromAddress, interchainAccountId, connectionId, msgs, memo, timeout, fee }: MsgSubmitTx) => MsgSubmitTxAminoType["value"];
        fromAmino: ({ from_address, interchain_account_id, connection_id, msgs, memo, timeout, fee }: MsgSubmitTxAminoType["value"]) => MsgSubmitTx;
    };
};
