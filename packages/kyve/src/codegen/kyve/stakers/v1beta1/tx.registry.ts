import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateStaker, MsgUpdateMetadata, MsgUpdateCommission, MsgJoinPool, MsgLeavePool, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kyve.stakers.v1beta1.MsgCreateStaker", MsgCreateStaker], ["/kyve.stakers.v1beta1.MsgUpdateMetadata", MsgUpdateMetadata], ["/kyve.stakers.v1beta1.MsgUpdateCommission", MsgUpdateCommission], ["/kyve.stakers.v1beta1.MsgJoinPool", MsgJoinPool], ["/kyve.stakers.v1beta1.MsgLeavePool", MsgLeavePool], ["/kyve.stakers.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createStaker(value: MsgCreateStaker) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgCreateStaker",
        value: MsgCreateStaker.encode(value).finish()
      };
    },
    updateMetadata(value: MsgUpdateMetadata) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadata",
        value: MsgUpdateMetadata.encode(value).finish()
      };
    },
    updateCommission(value: MsgUpdateCommission) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommission",
        value: MsgUpdateCommission.encode(value).finish()
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgJoinPool",
        value: MsgJoinPool.encode(value).finish()
      };
    },
    leavePool(value: MsgLeavePool) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgLeavePool",
        value: MsgLeavePool.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createStaker(value: MsgCreateStaker) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgCreateStaker",
        value
      };
    },
    updateMetadata(value: MsgUpdateMetadata) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadata",
        value
      };
    },
    updateCommission(value: MsgUpdateCommission) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommission",
        value
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgJoinPool",
        value
      };
    },
    leavePool(value: MsgLeavePool) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgLeavePool",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    createStaker(value: any) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgCreateStaker",
        value: MsgCreateStaker.fromJSON(value)
      };
    },
    updateMetadata(value: any) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadata",
        value: MsgUpdateMetadata.fromJSON(value)
      };
    },
    updateCommission(value: any) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommission",
        value: MsgUpdateCommission.fromJSON(value)
      };
    },
    joinPool(value: any) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgJoinPool",
        value: MsgJoinPool.fromJSON(value)
      };
    },
    leavePool(value: any) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgLeavePool",
        value: MsgLeavePool.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createStaker(value: MsgCreateStaker) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgCreateStaker",
        value: MsgCreateStaker.fromPartial(value)
      };
    },
    updateMetadata(value: MsgUpdateMetadata) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadata",
        value: MsgUpdateMetadata.fromPartial(value)
      };
    },
    updateCommission(value: MsgUpdateCommission) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommission",
        value: MsgUpdateCommission.fromPartial(value)
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgJoinPool",
        value: MsgJoinPool.fromPartial(value)
      };
    },
    leavePool(value: MsgLeavePool) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgLeavePool",
        value: MsgLeavePool.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};