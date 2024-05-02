import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgMigrateCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateContractAdmin, MsgClearContractAdmin } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/terra.wasm.v1beta1.MsgStoreCode", MsgStoreCode], ["/terra.wasm.v1beta1.MsgMigrateCode", MsgMigrateCode], ["/terra.wasm.v1beta1.MsgInstantiateContract", MsgInstantiateContract], ["/terra.wasm.v1beta1.MsgExecuteContract", MsgExecuteContract], ["/terra.wasm.v1beta1.MsgMigrateContract", MsgMigrateContract], ["/terra.wasm.v1beta1.MsgUpdateContractAdmin", MsgUpdateContractAdmin], ["/terra.wasm.v1beta1.MsgClearContractAdmin", MsgClearContractAdmin]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgStoreCode",
        value: MsgStoreCode.encode(value).finish()
      };
    },
    migrateCode(value: MsgMigrateCode) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgMigrateCode",
        value: MsgMigrateCode.encode(value).finish()
      };
    },
    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContract",
        value: MsgInstantiateContract.encode(value).finish()
      };
    },
    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgExecuteContract",
        value: MsgExecuteContract.encode(value).finish()
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgMigrateContract",
        value: MsgMigrateContract.encode(value).finish()
      };
    },
    updateContractAdmin(value: MsgUpdateContractAdmin) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdmin",
        value: MsgUpdateContractAdmin.encode(value).finish()
      };
    },
    clearContractAdmin(value: MsgClearContractAdmin) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdmin",
        value: MsgClearContractAdmin.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgStoreCode",
        value
      };
    },
    migrateCode(value: MsgMigrateCode) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgMigrateCode",
        value
      };
    },
    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContract",
        value
      };
    },
    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgExecuteContract",
        value
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgMigrateContract",
        value
      };
    },
    updateContractAdmin(value: MsgUpdateContractAdmin) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdmin",
        value
      };
    },
    clearContractAdmin(value: MsgClearContractAdmin) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdmin",
        value
      };
    }
  },
  fromJSON: {
    storeCode(value: any) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgStoreCode",
        value: MsgStoreCode.fromJSON(value)
      };
    },
    migrateCode(value: any) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgMigrateCode",
        value: MsgMigrateCode.fromJSON(value)
      };
    },
    instantiateContract(value: any) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromJSON(value)
      };
    },
    executeContract(value: any) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgExecuteContract",
        value: MsgExecuteContract.fromJSON(value)
      };
    },
    migrateContract(value: any) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgMigrateContract",
        value: MsgMigrateContract.fromJSON(value)
      };
    },
    updateContractAdmin(value: any) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdmin",
        value: MsgUpdateContractAdmin.fromJSON(value)
      };
    },
    clearContractAdmin(value: any) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdmin",
        value: MsgClearContractAdmin.fromJSON(value)
      };
    }
  },
  fromPartial: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgStoreCode",
        value: MsgStoreCode.fromPartial(value)
      };
    },
    migrateCode(value: MsgMigrateCode) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgMigrateCode",
        value: MsgMigrateCode.fromPartial(value)
      };
    },
    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromPartial(value)
      };
    },
    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgExecuteContract",
        value: MsgExecuteContract.fromPartial(value)
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgMigrateContract",
        value: MsgMigrateContract.fromPartial(value)
      };
    },
    updateContractAdmin(value: MsgUpdateContractAdmin) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdmin",
        value: MsgUpdateContractAdmin.fromPartial(value)
      };
    },
    clearContractAdmin(value: MsgClearContractAdmin) {
      return {
        typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdmin",
        value: MsgClearContractAdmin.fromPartial(value)
      };
    }
  }
};