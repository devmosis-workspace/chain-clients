import { MsgCreateProgram, MsgEditProgram, MsgActivateProgram, MsgCloseProgram, MsgSubmitFinding, MsgEditFinding, MsgActivateFinding, MsgConfirmFinding, MsgConfirmFindingPaid, MsgCloseFinding, MsgPublishFinding } from "./tx";
export const AminoConverter = {
  "/shentu.bounty.v1.MsgCreateProgram": {
    aminoType: "/shentu.bounty.v1.MsgCreateProgram",
    toAmino: MsgCreateProgram.toAmino,
    fromAmino: MsgCreateProgram.fromAmino
  },
  "/shentu.bounty.v1.MsgEditProgram": {
    aminoType: "/shentu.bounty.v1.MsgEditProgram",
    toAmino: MsgEditProgram.toAmino,
    fromAmino: MsgEditProgram.fromAmino
  },
  "/shentu.bounty.v1.MsgActivateProgram": {
    aminoType: "/shentu.bounty.v1.MsgActivateProgram",
    toAmino: MsgActivateProgram.toAmino,
    fromAmino: MsgActivateProgram.fromAmino
  },
  "/shentu.bounty.v1.MsgCloseProgram": {
    aminoType: "/shentu.bounty.v1.MsgCloseProgram",
    toAmino: MsgCloseProgram.toAmino,
    fromAmino: MsgCloseProgram.fromAmino
  },
  "/shentu.bounty.v1.MsgSubmitFinding": {
    aminoType: "/shentu.bounty.v1.MsgSubmitFinding",
    toAmino: MsgSubmitFinding.toAmino,
    fromAmino: MsgSubmitFinding.fromAmino
  },
  "/shentu.bounty.v1.MsgEditFinding": {
    aminoType: "/shentu.bounty.v1.MsgEditFinding",
    toAmino: MsgEditFinding.toAmino,
    fromAmino: MsgEditFinding.fromAmino
  },
  "/shentu.bounty.v1.MsgActivateFinding": {
    aminoType: "/shentu.bounty.v1.MsgActivateFinding",
    toAmino: MsgActivateFinding.toAmino,
    fromAmino: MsgActivateFinding.fromAmino
  },
  "/shentu.bounty.v1.MsgConfirmFinding": {
    aminoType: "/shentu.bounty.v1.MsgConfirmFinding",
    toAmino: MsgConfirmFinding.toAmino,
    fromAmino: MsgConfirmFinding.fromAmino
  },
  "/shentu.bounty.v1.MsgConfirmFindingPaid": {
    aminoType: "/shentu.bounty.v1.MsgConfirmFindingPaid",
    toAmino: MsgConfirmFindingPaid.toAmino,
    fromAmino: MsgConfirmFindingPaid.fromAmino
  },
  "/shentu.bounty.v1.MsgCloseFinding": {
    aminoType: "/shentu.bounty.v1.MsgCloseFinding",
    toAmino: MsgCloseFinding.toAmino,
    fromAmino: MsgCloseFinding.fromAmino
  },
  "/shentu.bounty.v1.MsgPublishFinding": {
    aminoType: "/shentu.bounty.v1.MsgPublishFinding",
    toAmino: MsgPublishFinding.toAmino,
    fromAmino: MsgPublishFinding.fromAmino
  }
};