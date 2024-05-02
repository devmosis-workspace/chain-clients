import { MsgOpen, MsgClose, MsgForceClose, MsgUpdateParams, MsgUpdatePools, MsgUpdateRowanCollateral, MsgWhitelist, MsgDewhitelist, MsgAdminClose, MsgAdminCloseAll } from "./tx";
export const AminoConverter = {
  "/sifnode.margin.v1.MsgOpen": {
    aminoType: "/sifnode.margin.v1.MsgOpen",
    toAmino: MsgOpen.toAmino,
    fromAmino: MsgOpen.fromAmino
  },
  "/sifnode.margin.v1.MsgClose": {
    aminoType: "/sifnode.margin.v1.MsgClose",
    toAmino: MsgClose.toAmino,
    fromAmino: MsgClose.fromAmino
  },
  "/sifnode.margin.v1.MsgForceClose": {
    aminoType: "/sifnode.margin.v1.MsgForceClose",
    toAmino: MsgForceClose.toAmino,
    fromAmino: MsgForceClose.fromAmino
  },
  "/sifnode.margin.v1.MsgUpdateParams": {
    aminoType: "/sifnode.margin.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sifnode.margin.v1.MsgUpdatePools": {
    aminoType: "/sifnode.margin.v1.MsgUpdatePools",
    toAmino: MsgUpdatePools.toAmino,
    fromAmino: MsgUpdatePools.fromAmino
  },
  "/sifnode.margin.v1.MsgUpdateRowanCollateral": {
    aminoType: "/sifnode.margin.v1.MsgUpdateRowanCollateral",
    toAmino: MsgUpdateRowanCollateral.toAmino,
    fromAmino: MsgUpdateRowanCollateral.fromAmino
  },
  "/sifnode.margin.v1.MsgWhitelist": {
    aminoType: "/sifnode.margin.v1.MsgWhitelist",
    toAmino: MsgWhitelist.toAmino,
    fromAmino: MsgWhitelist.fromAmino
  },
  "/sifnode.margin.v1.MsgDewhitelist": {
    aminoType: "/sifnode.margin.v1.MsgDewhitelist",
    toAmino: MsgDewhitelist.toAmino,
    fromAmino: MsgDewhitelist.fromAmino
  },
  "/sifnode.margin.v1.MsgAdminClose": {
    aminoType: "/sifnode.margin.v1.MsgAdminClose",
    toAmino: MsgAdminClose.toAmino,
    fromAmino: MsgAdminClose.fromAmino
  },
  "/sifnode.margin.v1.MsgAdminCloseAll": {
    aminoType: "/sifnode.margin.v1.MsgAdminCloseAll",
    toAmino: MsgAdminCloseAll.toAmino,
    fromAmino: MsgAdminCloseAll.fromAmino
  }
};