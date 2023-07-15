import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgSetAirdropAllocations, MsgClaimFreeAmount, MsgCreateAirdrop, MsgDeleteAirdrop } from "./tx";
export interface MsgSetAirdropAllocationsAminoType extends AminoMsg {
  type: "/stride.claim.MsgSetAirdropAllocations";
  value: {
    allocator: string;
    airdrop_identifier: string;
    users: string[];
    weights: string[];
  };
}
export interface MsgClaimFreeAmountAminoType extends AminoMsg {
  type: "/stride.claim.MsgClaimFreeAmount";
  value: {
    user: string;
  };
}
export interface MsgCreateAirdropAminoType extends AminoMsg {
  type: "/stride.claim.MsgCreateAirdrop";
  value: {
    distributor: string;
    identifier: string;
    chain_id: string;
    denom: string;
    start_time: string;
    duration: string;
    autopilot_enabled: boolean;
  };
}
export interface MsgDeleteAirdropAminoType extends AminoMsg {
  type: "/stride.claim.MsgDeleteAirdrop";
  value: {
    distributor: string;
    identifier: string;
  };
}
export const AminoConverter = {
  "/stride.claim.MsgSetAirdropAllocations": {
    aminoType: "/stride.claim.MsgSetAirdropAllocations",
    toAmino: ({
      allocator,
      airdropIdentifier,
      users,
      weights
    }: MsgSetAirdropAllocations): MsgSetAirdropAllocationsAminoType["value"] => {
      return {
        allocator,
        airdrop_identifier: airdropIdentifier,
        users,
        weights
      };
    },
    fromAmino: ({
      allocator,
      airdrop_identifier,
      users,
      weights
    }: MsgSetAirdropAllocationsAminoType["value"]): MsgSetAirdropAllocations => {
      return {
        allocator,
        airdropIdentifier: airdrop_identifier,
        users,
        weights
      };
    }
  },
  "/stride.claim.MsgClaimFreeAmount": {
    aminoType: "/stride.claim.MsgClaimFreeAmount",
    toAmino: ({
      user
    }: MsgClaimFreeAmount): MsgClaimFreeAmountAminoType["value"] => {
      return {
        user
      };
    },
    fromAmino: ({
      user
    }: MsgClaimFreeAmountAminoType["value"]): MsgClaimFreeAmount => {
      return {
        user
      };
    }
  },
  "/stride.claim.MsgCreateAirdrop": {
    aminoType: "/stride.claim.MsgCreateAirdrop",
    toAmino: ({
      distributor,
      identifier,
      chainId,
      denom,
      startTime,
      duration,
      autopilotEnabled
    }: MsgCreateAirdrop): MsgCreateAirdropAminoType["value"] => {
      return {
        distributor,
        identifier,
        chain_id: chainId,
        denom,
        start_time: startTime.toString(),
        duration: duration.toString(),
        autopilot_enabled: autopilotEnabled
      };
    },
    fromAmino: ({
      distributor,
      identifier,
      chain_id,
      denom,
      start_time,
      duration,
      autopilot_enabled
    }: MsgCreateAirdropAminoType["value"]): MsgCreateAirdrop => {
      return {
        distributor,
        identifier,
        chainId: chain_id,
        denom,
        startTime: Long.fromString(start_time),
        duration: Long.fromString(duration),
        autopilotEnabled: autopilot_enabled
      };
    }
  },
  "/stride.claim.MsgDeleteAirdrop": {
    aminoType: "/stride.claim.MsgDeleteAirdrop",
    toAmino: ({
      distributor,
      identifier
    }: MsgDeleteAirdrop): MsgDeleteAirdropAminoType["value"] => {
      return {
        distributor,
        identifier
      };
    },
    fromAmino: ({
      distributor,
      identifier
    }: MsgDeleteAirdropAminoType["value"]): MsgDeleteAirdrop => {
      return {
        distributor,
        identifier
      };
    }
  }
};