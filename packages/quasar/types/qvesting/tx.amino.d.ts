import { MsgCreateVestingAccount } from "./tx";
export declare const AminoConverter: {
    "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: (message: MsgCreateVestingAccount) => import("./tx").MsgCreateVestingAccountAmino;
        fromAmino: (object: import("./tx").MsgCreateVestingAccountAmino) => MsgCreateVestingAccount;
    };
};
