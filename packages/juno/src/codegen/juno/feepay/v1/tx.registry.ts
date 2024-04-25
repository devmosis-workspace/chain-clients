import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterFeePayContract, MsgUnregisterFeePayContract, MsgFundFeePayContract, MsgUpdateFeePayContractWalletLimit, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/juno.feepay.v1.MsgRegisterFeePayContract", MsgRegisterFeePayContract], ["/juno.feepay.v1.MsgUnregisterFeePayContract", MsgUnregisterFeePayContract], ["/juno.feepay.v1.MsgFundFeePayContract", MsgFundFeePayContract], ["/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit", MsgUpdateFeePayContractWalletLimit], ["/juno.feepay.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerFeePayContract(value: MsgRegisterFeePayContract) {
      return {
        typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContract",
        value: MsgRegisterFeePayContract.encode(value).finish()
      };
    },
    unregisterFeePayContract(value: MsgUnregisterFeePayContract) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContract",
        value: MsgUnregisterFeePayContract.encode(value).finish()
      };
    },
    fundFeePayContract(value: MsgFundFeePayContract) {
      return {
        typeUrl: "/juno.feepay.v1.MsgFundFeePayContract",
        value: MsgFundFeePayContract.encode(value).finish()
      };
    },
    updateFeePayContractWalletLimit(value: MsgUpdateFeePayContractWalletLimit) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit",
        value: MsgUpdateFeePayContractWalletLimit.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerFeePayContract(value: MsgRegisterFeePayContract) {
      return {
        typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContract",
        value
      };
    },
    unregisterFeePayContract(value: MsgUnregisterFeePayContract) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContract",
        value
      };
    },
    fundFeePayContract(value: MsgFundFeePayContract) {
      return {
        typeUrl: "/juno.feepay.v1.MsgFundFeePayContract",
        value
      };
    },
    updateFeePayContractWalletLimit(value: MsgUpdateFeePayContractWalletLimit) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    registerFeePayContract(value: any) {
      return {
        typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContract",
        value: MsgRegisterFeePayContract.fromJSON(value)
      };
    },
    unregisterFeePayContract(value: any) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContract",
        value: MsgUnregisterFeePayContract.fromJSON(value)
      };
    },
    fundFeePayContract(value: any) {
      return {
        typeUrl: "/juno.feepay.v1.MsgFundFeePayContract",
        value: MsgFundFeePayContract.fromJSON(value)
      };
    },
    updateFeePayContractWalletLimit(value: any) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit",
        value: MsgUpdateFeePayContractWalletLimit.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerFeePayContract(value: MsgRegisterFeePayContract) {
      return {
        typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContract",
        value: MsgRegisterFeePayContract.fromPartial(value)
      };
    },
    unregisterFeePayContract(value: MsgUnregisterFeePayContract) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContract",
        value: MsgUnregisterFeePayContract.fromPartial(value)
      };
    },
    fundFeePayContract(value: MsgFundFeePayContract) {
      return {
        typeUrl: "/juno.feepay.v1.MsgFundFeePayContract",
        value: MsgFundFeePayContract.fromPartial(value)
      };
    },
    updateFeePayContractWalletLimit(value: MsgUpdateFeePayContractWalletLimit) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit",
        value: MsgUpdateFeePayContractWalletLimit.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.feepay.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};