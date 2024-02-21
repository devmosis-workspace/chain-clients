import { MsgDepositToSubaccount, MsgWithdrawFromSubaccount, MsgSendFromModuleToAccount } from "./transfer";
import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateTransfer } from "./tx";
export interface MsgCreateTransferAminoType extends AminoMsg {
  type: "/dydxprotocol.sending.MsgCreateTransfer";
  value: {
    transfer: {
      sender: {
        owner: string;
        number: number;
      };
      recipient: {
        owner: string;
        number: number;
      };
      asset_id: number;
      amount: string;
    };
  };
}
export interface MsgDepositToSubaccountAminoType extends AminoMsg {
  type: "/dydxprotocol.sending.MsgDepositToSubaccount";
  value: {
    sender: string;
    recipient: {
      owner: string;
      number: number;
    };
    asset_id: number;
    quantums: string;
  };
}
export interface MsgWithdrawFromSubaccountAminoType extends AminoMsg {
  type: "/dydxprotocol.sending.MsgWithdrawFromSubaccount";
  value: {
    sender: {
      owner: string;
      number: number;
    };
    recipient: string;
    asset_id: number;
    quantums: string;
  };
}
export interface MsgSendFromModuleToAccountAminoType extends AminoMsg {
  type: "/dydxprotocol.sending.MsgSendFromModuleToAccount";
  value: {
    authority: string;
    sender_module_name: string;
    recipient: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/dydxprotocol.sending.MsgCreateTransfer": {
    aminoType: "/dydxprotocol.sending.MsgCreateTransfer",
    toAmino: ({
      transfer
    }: MsgCreateTransfer): MsgCreateTransferAminoType["value"] => {
      return {
        transfer: {
          sender: {
            owner: transfer.sender.owner,
            number: transfer.sender.number
          },
          recipient: {
            owner: transfer.recipient.owner,
            number: transfer.recipient.number
          },
          asset_id: transfer.assetId,
          amount: transfer.amount.toString()
        }
      };
    },
    fromAmino: ({
      transfer
    }: MsgCreateTransferAminoType["value"]): MsgCreateTransfer => {
      return {
        transfer: {
          sender: {
            owner: transfer.sender.owner,
            number: transfer.sender.number
          },
          recipient: {
            owner: transfer.recipient.owner,
            number: transfer.recipient.number
          },
          assetId: transfer.asset_id,
          amount: BigInt(transfer.amount)
        }
      };
    }
  },
  "/dydxprotocol.sending.MsgDepositToSubaccount": {
    aminoType: "/dydxprotocol.sending.MsgDepositToSubaccount",
    toAmino: ({
      sender,
      recipient,
      assetId,
      quantums
    }: MsgDepositToSubaccount): MsgDepositToSubaccountAminoType["value"] => {
      return {
        sender,
        recipient: {
          owner: recipient.owner,
          number: recipient.number
        },
        asset_id: assetId,
        quantums: quantums.toString()
      };
    },
    fromAmino: ({
      sender,
      recipient,
      asset_id,
      quantums
    }: MsgDepositToSubaccountAminoType["value"]): MsgDepositToSubaccount => {
      return {
        sender,
        recipient: {
          owner: recipient.owner,
          number: recipient.number
        },
        assetId: asset_id,
        quantums: BigInt(quantums)
      };
    }
  },
  "/dydxprotocol.sending.MsgWithdrawFromSubaccount": {
    aminoType: "/dydxprotocol.sending.MsgWithdrawFromSubaccount",
    toAmino: ({
      sender,
      recipient,
      assetId,
      quantums
    }: MsgWithdrawFromSubaccount): MsgWithdrawFromSubaccountAminoType["value"] => {
      return {
        sender: {
          owner: sender.owner,
          number: sender.number
        },
        recipient,
        asset_id: assetId,
        quantums: quantums.toString()
      };
    },
    fromAmino: ({
      sender,
      recipient,
      asset_id,
      quantums
    }: MsgWithdrawFromSubaccountAminoType["value"]): MsgWithdrawFromSubaccount => {
      return {
        sender: {
          owner: sender.owner,
          number: sender.number
        },
        recipient,
        assetId: asset_id,
        quantums: BigInt(quantums)
      };
    }
  },
  "/dydxprotocol.sending.MsgSendFromModuleToAccount": {
    aminoType: "/dydxprotocol.sending.MsgSendFromModuleToAccount",
    toAmino: ({
      authority,
      senderModuleName,
      recipient,
      coin
    }: MsgSendFromModuleToAccount): MsgSendFromModuleToAccountAminoType["value"] => {
      return {
        authority,
        sender_module_name: senderModuleName,
        recipient,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    },
    fromAmino: ({
      authority,
      sender_module_name,
      recipient,
      coin
    }: MsgSendFromModuleToAccountAminoType["value"]): MsgSendFromModuleToAccount => {
      return {
        authority,
        senderModuleName: sender_module_name,
        recipient,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  }
};