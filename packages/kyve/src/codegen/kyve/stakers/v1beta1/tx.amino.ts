import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateStaker, MsgUpdateMetadata, MsgUpdateCommission, MsgJoinPool, MsgLeavePool, MsgUpdateParams } from "./tx";
export interface MsgCreateStakerAminoType extends AminoMsg {
  type: "/kyve.stakers.v1beta1.MsgCreateStaker";
  value: {
    creator: string;
    amount: string;
    commission: string;
  };
}
export interface MsgUpdateMetadataAminoType extends AminoMsg {
  type: "/kyve.stakers.v1beta1.MsgUpdateMetadata";
  value: {
    creator: string;
    moniker: string;
    website: string;
    identity: string;
    security_contact: string;
    details: string;
  };
}
export interface MsgUpdateCommissionAminoType extends AminoMsg {
  type: "/kyve.stakers.v1beta1.MsgUpdateCommission";
  value: {
    creator: string;
    commission: string;
  };
}
export interface MsgJoinPoolAminoType extends AminoMsg {
  type: "/kyve.stakers.v1beta1.MsgJoinPool";
  value: {
    creator: string;
    pool_id: string;
    valaddress: string;
    amount: string;
  };
}
export interface MsgLeavePoolAminoType extends AminoMsg {
  type: "/kyve.stakers.v1beta1.MsgLeavePool";
  value: {
    creator: string;
    pool_id: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/kyve.stakers.v1beta1.MsgUpdateParams";
  value: {
    authority: string;
    payload: string;
  };
}
export const AminoConverter = {
  "/kyve.stakers.v1beta1.MsgCreateStaker": {
    aminoType: "/kyve.stakers.v1beta1.MsgCreateStaker",
    toAmino: ({
      creator,
      amount,
      commission
    }: MsgCreateStaker): MsgCreateStakerAminoType["value"] => {
      return {
        creator,
        amount: amount.toString(),
        commission
      };
    },
    fromAmino: ({
      creator,
      amount,
      commission
    }: MsgCreateStakerAminoType["value"]): MsgCreateStaker => {
      return {
        creator,
        amount: Long.fromString(amount),
        commission
      };
    }
  },
  "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
    aminoType: "/kyve.stakers.v1beta1.MsgUpdateMetadata",
    toAmino: ({
      creator,
      moniker,
      website,
      identity,
      securityContact,
      details
    }: MsgUpdateMetadata): MsgUpdateMetadataAminoType["value"] => {
      return {
        creator,
        moniker,
        website,
        identity,
        security_contact: securityContact,
        details
      };
    },
    fromAmino: ({
      creator,
      moniker,
      website,
      identity,
      security_contact,
      details
    }: MsgUpdateMetadataAminoType["value"]): MsgUpdateMetadata => {
      return {
        creator,
        moniker,
        website,
        identity,
        securityContact: security_contact,
        details
      };
    }
  },
  "/kyve.stakers.v1beta1.MsgUpdateCommission": {
    aminoType: "/kyve.stakers.v1beta1.MsgUpdateCommission",
    toAmino: ({
      creator,
      commission
    }: MsgUpdateCommission): MsgUpdateCommissionAminoType["value"] => {
      return {
        creator,
        commission
      };
    },
    fromAmino: ({
      creator,
      commission
    }: MsgUpdateCommissionAminoType["value"]): MsgUpdateCommission => {
      return {
        creator,
        commission
      };
    }
  },
  "/kyve.stakers.v1beta1.MsgJoinPool": {
    aminoType: "/kyve.stakers.v1beta1.MsgJoinPool",
    toAmino: ({
      creator,
      poolId,
      valaddress,
      amount
    }: MsgJoinPool): MsgJoinPoolAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString(),
        valaddress,
        amount: amount.toString()
      };
    },
    fromAmino: ({
      creator,
      pool_id,
      valaddress,
      amount
    }: MsgJoinPoolAminoType["value"]): MsgJoinPool => {
      return {
        creator,
        poolId: Long.fromString(pool_id),
        valaddress,
        amount: Long.fromString(amount)
      };
    }
  },
  "/kyve.stakers.v1beta1.MsgLeavePool": {
    aminoType: "/kyve.stakers.v1beta1.MsgLeavePool",
    toAmino: ({
      creator,
      poolId
    }: MsgLeavePool): MsgLeavePoolAminoType["value"] => {
      return {
        creator,
        pool_id: poolId.toString()
      };
    },
    fromAmino: ({
      creator,
      pool_id
    }: MsgLeavePoolAminoType["value"]): MsgLeavePool => {
      return {
        creator,
        poolId: Long.fromString(pool_id)
      };
    }
  },
  "/kyve.stakers.v1beta1.MsgUpdateParams": {
    aminoType: "/kyve.stakers.v1beta1.MsgUpdateParams",
    toAmino: ({
      authority,
      payload
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        payload
      };
    },
    fromAmino: ({
      authority,
      payload
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        payload
      };
    }
  }
};