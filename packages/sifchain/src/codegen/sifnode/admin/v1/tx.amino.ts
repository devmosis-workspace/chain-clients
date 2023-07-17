import { adminTypeFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { MsgAddAccount, MsgRemoveAccount, MsgSetParams } from "./tx";
export interface MsgAddAccountAminoType extends AminoMsg {
  type: "/sifnode.admin.v1.MsgAddAccount";
  value: {
    signer: string;
    account: {
      admin_type: number;
      admin_address: string;
    };
  };
}
export interface MsgRemoveAccountAminoType extends AminoMsg {
  type: "/sifnode.admin.v1.MsgRemoveAccount";
  value: {
    signer: string;
    account: {
      admin_type: number;
      admin_address: string;
    };
  };
}
export interface MsgSetParamsAminoType extends AminoMsg {
  type: "/sifnode.admin.v1.MsgSetParams";
  value: {
    signer: string;
    params: {
      submit_proposal_fee: string;
    };
  };
}
export const AminoConverter = {
  "/sifnode.admin.v1.MsgAddAccount": {
    aminoType: "/sifnode.admin.v1.MsgAddAccount",
    toAmino: ({
      signer,
      account
    }: MsgAddAccount): MsgAddAccountAminoType["value"] => {
      return {
        signer,
        account: {
          admin_type: account.adminType,
          admin_address: account.adminAddress
        }
      };
    },
    fromAmino: ({
      signer,
      account
    }: MsgAddAccountAminoType["value"]): MsgAddAccount => {
      return {
        signer,
        account: {
          adminType: adminTypeFromJSON(account.admin_type),
          adminAddress: account.admin_address
        }
      };
    }
  },
  "/sifnode.admin.v1.MsgRemoveAccount": {
    aminoType: "/sifnode.admin.v1.MsgRemoveAccount",
    toAmino: ({
      signer,
      account
    }: MsgRemoveAccount): MsgRemoveAccountAminoType["value"] => {
      return {
        signer,
        account: {
          admin_type: account.adminType,
          admin_address: account.adminAddress
        }
      };
    },
    fromAmino: ({
      signer,
      account
    }: MsgRemoveAccountAminoType["value"]): MsgRemoveAccount => {
      return {
        signer,
        account: {
          adminType: adminTypeFromJSON(account.admin_type),
          adminAddress: account.admin_address
        }
      };
    }
  },
  "/sifnode.admin.v1.MsgSetParams": {
    aminoType: "/sifnode.admin.v1.MsgSetParams",
    toAmino: ({
      signer,
      params
    }: MsgSetParams): MsgSetParamsAminoType["value"] => {
      return {
        signer,
        params: {
          submit_proposal_fee: params.submitProposalFee
        }
      };
    },
    fromAmino: ({
      signer,
      params
    }: MsgSetParamsAminoType["value"]): MsgSetParams => {
      return {
        signer,
        params: {
          submitProposalFee: params.submit_proposal_fee
        }
      };
    }
  }
};