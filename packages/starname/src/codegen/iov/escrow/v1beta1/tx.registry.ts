import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateEscrow, MsgUpdateEscrow, MsgTransferToEscrow, MsgRefundEscrow } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/starnamed.x.escrow.v1beta1.MsgCreateEscrow", MsgCreateEscrow], ["/starnamed.x.escrow.v1beta1.MsgUpdateEscrow", MsgUpdateEscrow], ["/starnamed.x.escrow.v1beta1.MsgTransferToEscrow", MsgTransferToEscrow], ["/starnamed.x.escrow.v1beta1.MsgRefundEscrow", MsgRefundEscrow]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createEscrow(value: MsgCreateEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow",
        value: MsgCreateEscrow.encode(value).finish()
      };
    },
    updateEscrow(value: MsgUpdateEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow",
        value: MsgUpdateEscrow.encode(value).finish()
      };
    },
    transferToEscrow(value: MsgTransferToEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow",
        value: MsgTransferToEscrow.encode(value).finish()
      };
    },
    refundEscrow(value: MsgRefundEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow",
        value: MsgRefundEscrow.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createEscrow(value: MsgCreateEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow",
        value
      };
    },
    updateEscrow(value: MsgUpdateEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow",
        value
      };
    },
    transferToEscrow(value: MsgTransferToEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow",
        value
      };
    },
    refundEscrow(value: MsgRefundEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow",
        value
      };
    }
  },
  fromJSON: {
    createEscrow(value: any) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow",
        value: MsgCreateEscrow.fromJSON(value)
      };
    },
    updateEscrow(value: any) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow",
        value: MsgUpdateEscrow.fromJSON(value)
      };
    },
    transferToEscrow(value: any) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow",
        value: MsgTransferToEscrow.fromJSON(value)
      };
    },
    refundEscrow(value: any) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow",
        value: MsgRefundEscrow.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createEscrow(value: MsgCreateEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow",
        value: MsgCreateEscrow.fromPartial(value)
      };
    },
    updateEscrow(value: MsgUpdateEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow",
        value: MsgUpdateEscrow.fromPartial(value)
      };
    },
    transferToEscrow(value: MsgTransferToEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow",
        value: MsgTransferToEscrow.fromPartial(value)
      };
    },
    refundEscrow(value: MsgRefundEscrow) {
      return {
        typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow",
        value: MsgRefundEscrow.fromPartial(value)
      };
    }
  }
};