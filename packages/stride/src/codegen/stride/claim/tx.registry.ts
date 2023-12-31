import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetAirdropAllocations, MsgClaimFreeAmount, MsgCreateAirdrop, MsgDeleteAirdrop } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/stride.claim.MsgSetAirdropAllocations", MsgSetAirdropAllocations], ["/stride.claim.MsgClaimFreeAmount", MsgClaimFreeAmount], ["/stride.claim.MsgCreateAirdrop", MsgCreateAirdrop], ["/stride.claim.MsgDeleteAirdrop", MsgDeleteAirdrop]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setAirdropAllocations(value: MsgSetAirdropAllocations) {
      return {
        typeUrl: "/stride.claim.MsgSetAirdropAllocations",
        value: MsgSetAirdropAllocations.encode(value).finish()
      };
    },
    claimFreeAmount(value: MsgClaimFreeAmount) {
      return {
        typeUrl: "/stride.claim.MsgClaimFreeAmount",
        value: MsgClaimFreeAmount.encode(value).finish()
      };
    },
    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/stride.claim.MsgCreateAirdrop",
        value: MsgCreateAirdrop.encode(value).finish()
      };
    },
    deleteAirdrop(value: MsgDeleteAirdrop) {
      return {
        typeUrl: "/stride.claim.MsgDeleteAirdrop",
        value: MsgDeleteAirdrop.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setAirdropAllocations(value: MsgSetAirdropAllocations) {
      return {
        typeUrl: "/stride.claim.MsgSetAirdropAllocations",
        value
      };
    },
    claimFreeAmount(value: MsgClaimFreeAmount) {
      return {
        typeUrl: "/stride.claim.MsgClaimFreeAmount",
        value
      };
    },
    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/stride.claim.MsgCreateAirdrop",
        value
      };
    },
    deleteAirdrop(value: MsgDeleteAirdrop) {
      return {
        typeUrl: "/stride.claim.MsgDeleteAirdrop",
        value
      };
    }
  },
  fromJSON: {
    setAirdropAllocations(value: any) {
      return {
        typeUrl: "/stride.claim.MsgSetAirdropAllocations",
        value: MsgSetAirdropAllocations.fromJSON(value)
      };
    },
    claimFreeAmount(value: any) {
      return {
        typeUrl: "/stride.claim.MsgClaimFreeAmount",
        value: MsgClaimFreeAmount.fromJSON(value)
      };
    },
    createAirdrop(value: any) {
      return {
        typeUrl: "/stride.claim.MsgCreateAirdrop",
        value: MsgCreateAirdrop.fromJSON(value)
      };
    },
    deleteAirdrop(value: any) {
      return {
        typeUrl: "/stride.claim.MsgDeleteAirdrop",
        value: MsgDeleteAirdrop.fromJSON(value)
      };
    }
  },
  fromPartial: {
    setAirdropAllocations(value: MsgSetAirdropAllocations) {
      return {
        typeUrl: "/stride.claim.MsgSetAirdropAllocations",
        value: MsgSetAirdropAllocations.fromPartial(value)
      };
    },
    claimFreeAmount(value: MsgClaimFreeAmount) {
      return {
        typeUrl: "/stride.claim.MsgClaimFreeAmount",
        value: MsgClaimFreeAmount.fromPartial(value)
      };
    },
    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/stride.claim.MsgCreateAirdrop",
        value: MsgCreateAirdrop.fromPartial(value)
      };
    },
    deleteAirdrop(value: MsgDeleteAirdrop) {
      return {
        typeUrl: "/stride.claim.MsgDeleteAirdrop",
        value: MsgDeleteAirdrop.fromPartial(value)
      };
    }
  }
};