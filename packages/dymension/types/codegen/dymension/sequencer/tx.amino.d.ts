import { MsgCreateSequencer } from "./tx";
export declare const AminoConverter: {
    "/dymensionxyz.dymension.sequencer.MsgCreateSequencer": {
        aminoType: string;
        toAmino: (message: MsgCreateSequencer) => import("./tx").MsgCreateSequencerAmino;
        fromAmino: (object: import("./tx").MsgCreateSequencerAmino) => MsgCreateSequencer;
    };
};
