import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateEscrow, MsgUpdateEscrow, MsgTransferToEscrow, MsgRefundEscrow } from "./tx";
export interface MsgCreateEscrowAminoType extends AminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow";
  value: {
    seller: string;
    fee_payer: string;
    object: {
      type_url: string;
      value: Uint8Array;
    };
    price: {
      denom: string;
      amount: string;
    }[];
    deadline: string;
  };
}
export interface MsgUpdateEscrowAminoType extends AminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow";
  value: {
    id: string;
    updater: string;
    fee_payer: string;
    seller: string;
    price: {
      denom: string;
      amount: string;
    }[];
    deadline: string;
  };
}
export interface MsgTransferToEscrowAminoType extends AminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow";
  value: {
    id: string;
    sender: string;
    fee_payer: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgRefundEscrowAminoType extends AminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow";
  value: {
    id: string;
    sender: string;
    fee_payer: string;
  };
}
export const AminoConverter = {
  "/starnamed.x.escrow.v1beta1.MsgCreateEscrow": {
    aminoType: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow",
    toAmino: ({
      seller,
      feePayer,
      object,
      price,
      deadline
    }: MsgCreateEscrow): MsgCreateEscrowAminoType["value"] => {
      return {
        seller,
        fee_payer: feePayer,
        object: {
          type_url: object.typeUrl,
          value: object.value
        },
        price: price.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        deadline: deadline.toString()
      };
    },
    fromAmino: ({
      seller,
      fee_payer,
      object,
      price,
      deadline
    }: MsgCreateEscrowAminoType["value"]): MsgCreateEscrow => {
      return {
        seller,
        feePayer: fee_payer,
        object: {
          typeUrl: object.type_url,
          value: object.value
        },
        price: price.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        deadline: Long.fromString(deadline)
      };
    }
  },
  "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow": {
    aminoType: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow",
    toAmino: ({
      id,
      updater,
      feePayer,
      seller,
      price,
      deadline
    }: MsgUpdateEscrow): MsgUpdateEscrowAminoType["value"] => {
      return {
        id,
        updater,
        fee_payer: feePayer,
        seller,
        price: price.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        deadline: deadline.toString()
      };
    },
    fromAmino: ({
      id,
      updater,
      fee_payer,
      seller,
      price,
      deadline
    }: MsgUpdateEscrowAminoType["value"]): MsgUpdateEscrow => {
      return {
        id,
        updater,
        feePayer: fee_payer,
        seller,
        price: price.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        deadline: Long.fromString(deadline)
      };
    }
  },
  "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow": {
    aminoType: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow",
    toAmino: ({
      id,
      sender,
      feePayer,
      amount
    }: MsgTransferToEscrow): MsgTransferToEscrowAminoType["value"] => {
      return {
        id,
        sender,
        fee_payer: feePayer,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      id,
      sender,
      fee_payer,
      amount
    }: MsgTransferToEscrowAminoType["value"]): MsgTransferToEscrow => {
      return {
        id,
        sender,
        feePayer: fee_payer,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/starnamed.x.escrow.v1beta1.MsgRefundEscrow": {
    aminoType: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow",
    toAmino: ({
      id,
      sender,
      feePayer
    }: MsgRefundEscrow): MsgRefundEscrowAminoType["value"] => {
      return {
        id,
        sender,
        fee_payer: feePayer
      };
    },
    fromAmino: ({
      id,
      sender,
      fee_payer
    }: MsgRefundEscrowAminoType["value"]): MsgRefundEscrow => {
      return {
        id,
        sender,
        feePayer: fee_payer
      };
    }
  }
};