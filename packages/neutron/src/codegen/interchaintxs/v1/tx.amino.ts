import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
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
export const AminoConverter = {
  "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount": {
    aminoType: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
    toAmino: ({
      fromAddress,
      connectionId,
      interchainAccountId
    }: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAminoType["value"] => {
      return {
        from_address: fromAddress,
        connection_id: connectionId,
        interchain_account_id: interchainAccountId
      };
    },
    fromAmino: ({
      from_address,
      connection_id,
      interchain_account_id
    }: MsgRegisterInterchainAccountAminoType["value"]): MsgRegisterInterchainAccount => {
      return {
        fromAddress: from_address,
        connectionId: connection_id,
        interchainAccountId: interchain_account_id
      };
    }
  },
  "/neutron.interchaintxs.v1.MsgSubmitTx": {
    aminoType: "/neutron.interchaintxs.v1.MsgSubmitTx",
    toAmino: ({
      fromAddress,
      interchainAccountId,
      connectionId,
      msgs,
      memo,
      timeout,
      fee
    }: MsgSubmitTx): MsgSubmitTxAminoType["value"] => {
      return {
        from_address: fromAddress,
        interchain_account_id: interchainAccountId,
        connection_id: connectionId,
        msgs: msgs.map(el0 => ({
          type_url: el0.typeUrl,
          value: el0.value
        })),
        memo,
        timeout: timeout.toString(),
        fee: {
          recv_fee: fee.recvFee.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          ack_fee: fee.ackFee.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          timeout_fee: fee.timeoutFee.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          }))
        }
      };
    },
    fromAmino: ({
      from_address,
      interchain_account_id,
      connection_id,
      msgs,
      memo,
      timeout,
      fee
    }: MsgSubmitTxAminoType["value"]): MsgSubmitTx => {
      return {
        fromAddress: from_address,
        interchainAccountId: interchain_account_id,
        connectionId: connection_id,
        msgs: msgs.map(el0 => ({
          typeUrl: el0.type_url,
          value: el0.value
        })),
        memo,
        timeout: Long.fromString(timeout),
        fee: {
          recvFee: fee.recv_fee.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          ackFee: fee.ack_fee.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          timeoutFee: fee.timeout_fee.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }
      };
    }
  }
};