import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgInstallBundle, MsgDeliverInbound, MsgWalletAction, MsgWalletSpendAction, MsgProvision } from "./msgs";
export interface MsgInstallBundleAminoType extends AminoMsg {
  type: "/agoric.swingset.MsgInstallBundle";
  value: {
    bundle: string;
    submitter: Uint8Array;
    compressed_bundle: Uint8Array;
    uncompressed_size: string;
  };
}
export interface MsgDeliverInboundAminoType extends AminoMsg {
  type: "/agoric.swingset.MsgDeliverInbound";
  value: {
    messages: string[];
    nums: string[];
    ack: string;
    submitter: Uint8Array;
  };
}
export interface MsgWalletActionAminoType extends AminoMsg {
  type: "/agoric.swingset.MsgWalletAction";
  value: {
    owner: Uint8Array;
    action: string;
  };
}
export interface MsgWalletSpendActionAminoType extends AminoMsg {
  type: "/agoric.swingset.MsgWalletSpendAction";
  value: {
    owner: Uint8Array;
    spend_action: string;
  };
}
export interface MsgProvisionAminoType extends AminoMsg {
  type: "/agoric.swingset.MsgProvision";
  value: {
    nickname: string;
    address: Uint8Array;
    power_flags: string[];
    submitter: Uint8Array;
  };
}
export const AminoConverter = {
  "/agoric.swingset.MsgInstallBundle": {
    aminoType: "/agoric.swingset.MsgInstallBundle",
    toAmino: ({
      bundle,
      submitter,
      compressedBundle,
      uncompressedSize
    }: MsgInstallBundle): MsgInstallBundleAminoType["value"] => {
      return {
        bundle,
        submitter,
        compressed_bundle: compressedBundle,
        uncompressed_size: uncompressedSize.toString()
      };
    },
    fromAmino: ({
      bundle,
      submitter,
      compressed_bundle,
      uncompressed_size
    }: MsgInstallBundleAminoType["value"]): MsgInstallBundle => {
      return {
        bundle,
        submitter,
        compressedBundle: compressed_bundle,
        uncompressedSize: Long.fromString(uncompressed_size)
      };
    }
  },
  "/agoric.swingset.MsgDeliverInbound": {
    aminoType: "/agoric.swingset.MsgDeliverInbound",
    toAmino: ({
      messages,
      nums,
      ack,
      submitter
    }: MsgDeliverInbound): MsgDeliverInboundAminoType["value"] => {
      return {
        messages,
        nums: nums.map(el0 => el0.toString()),
        ack: ack.toString(),
        submitter
      };
    },
    fromAmino: ({
      messages,
      nums,
      ack,
      submitter
    }: MsgDeliverInboundAminoType["value"]): MsgDeliverInbound => {
      return {
        messages,
        nums: nums.map(el0 => Long.fromString(el0)),
        ack: Long.fromString(ack),
        submitter
      };
    }
  },
  "/agoric.swingset.MsgWalletAction": {
    aminoType: "/agoric.swingset.MsgWalletAction",
    toAmino: ({
      owner,
      action
    }: MsgWalletAction): MsgWalletActionAminoType["value"] => {
      return {
        owner,
        action
      };
    },
    fromAmino: ({
      owner,
      action
    }: MsgWalletActionAminoType["value"]): MsgWalletAction => {
      return {
        owner,
        action
      };
    }
  },
  "/agoric.swingset.MsgWalletSpendAction": {
    aminoType: "/agoric.swingset.MsgWalletSpendAction",
    toAmino: ({
      owner,
      spendAction
    }: MsgWalletSpendAction): MsgWalletSpendActionAminoType["value"] => {
      return {
        owner,
        spend_action: spendAction
      };
    },
    fromAmino: ({
      owner,
      spend_action
    }: MsgWalletSpendActionAminoType["value"]): MsgWalletSpendAction => {
      return {
        owner,
        spendAction: spend_action
      };
    }
  },
  "/agoric.swingset.MsgProvision": {
    aminoType: "/agoric.swingset.MsgProvision",
    toAmino: ({
      nickname,
      address,
      powerFlags,
      submitter
    }: MsgProvision): MsgProvisionAminoType["value"] => {
      return {
        nickname,
        address,
        power_flags: powerFlags,
        submitter
      };
    },
    fromAmino: ({
      nickname,
      address,
      power_flags,
      submitter
    }: MsgProvisionAminoType["value"]): MsgProvision => {
      return {
        nickname,
        address,
        powerFlags: power_flags,
        submitter
      };
    }
  }
};