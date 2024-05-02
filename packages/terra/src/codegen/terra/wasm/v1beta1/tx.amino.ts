import { MsgStoreCode, MsgMigrateCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateContractAdmin, MsgClearContractAdmin } from "./tx";
export const AminoConverter = {
  "/terra.wasm.v1beta1.MsgStoreCode": {
    aminoType: "/terra.wasm.v1beta1.MsgStoreCode",
    toAmino: MsgStoreCode.toAmino,
    fromAmino: MsgStoreCode.fromAmino
  },
  "/terra.wasm.v1beta1.MsgMigrateCode": {
    aminoType: "/terra.wasm.v1beta1.MsgMigrateCode",
    toAmino: MsgMigrateCode.toAmino,
    fromAmino: MsgMigrateCode.fromAmino
  },
  "/terra.wasm.v1beta1.MsgInstantiateContract": {
    aminoType: "/terra.wasm.v1beta1.MsgInstantiateContract",
    toAmino: MsgInstantiateContract.toAmino,
    fromAmino: MsgInstantiateContract.fromAmino
  },
  "/terra.wasm.v1beta1.MsgExecuteContract": {
    aminoType: "/terra.wasm.v1beta1.MsgExecuteContract",
    toAmino: MsgExecuteContract.toAmino,
    fromAmino: MsgExecuteContract.fromAmino
  },
  "/terra.wasm.v1beta1.MsgMigrateContract": {
    aminoType: "/terra.wasm.v1beta1.MsgMigrateContract",
    toAmino: MsgMigrateContract.toAmino,
    fromAmino: MsgMigrateContract.fromAmino
  },
  "/terra.wasm.v1beta1.MsgUpdateContractAdmin": {
    aminoType: "/terra.wasm.v1beta1.MsgUpdateContractAdmin",
    toAmino: MsgUpdateContractAdmin.toAmino,
    fromAmino: MsgUpdateContractAdmin.fromAmino
  },
  "/terra.wasm.v1beta1.MsgClearContractAdmin": {
    aminoType: "/terra.wasm.v1beta1.MsgClearContractAdmin",
    toAmino: MsgClearContractAdmin.toAmino,
    fromAmino: MsgClearContractAdmin.fromAmino
  }
};