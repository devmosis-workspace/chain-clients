import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin } from "./tx";
export interface MsgCreateDenomAminoType extends AminoMsg {
  type: "osmosis/tokenfactory/create-denom";
  value: {
    sender: string;
    subdenom: string;
  };
}
export interface MsgMintAminoType extends AminoMsg {
  type: "osmosis/tokenfactory/mint";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgBurnAminoType extends AminoMsg {
  type: "osmosis/tokenfactory/burn";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgChangeAdminAminoType extends AminoMsg {
  type: "osmosis/tokenfactory/change-admin";
  value: {
    sender: string;
    denom: string;
    newAdmin: string;
  };
}
export const AminoConverter = {
  "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "osmosis/tokenfactory/create-denom",
    toAmino: ({
      sender,
      subdenom
    }: MsgCreateDenom): MsgCreateDenomAminoType["value"] => {
      return {
        sender,
        subdenom
      };
    },
    fromAmino: ({
      sender,
      subdenom
    }: MsgCreateDenomAminoType["value"]): MsgCreateDenom => {
      return {
        sender,
        subdenom
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgMint": {
    aminoType: "osmosis/tokenfactory/mint",
    toAmino: ({
      sender,
      amount
    }: MsgMint): MsgMintAminoType["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: MsgMintAminoType["value"]): MsgMint => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "osmosis/tokenfactory/burn",
    toAmino: ({
      sender,
      amount
    }: MsgBurn): MsgBurnAminoType["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: MsgBurnAminoType["value"]): MsgBurn => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "osmosis/tokenfactory/change-admin",
    toAmino: ({
      sender,
      denom,
      newAdmin
    }: MsgChangeAdmin): MsgChangeAdminAminoType["value"] => {
      return {
        sender,
        denom,
        newAdmin
      };
    },
    fromAmino: ({
      sender,
      denom,
      newAdmin
    }: MsgChangeAdminAminoType["value"]): MsgChangeAdmin => {
      return {
        sender,
        denom,
        newAdmin
      };
    }
  }
};