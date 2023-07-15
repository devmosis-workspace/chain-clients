import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
export interface MsgCreateDeploymentAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgCreateDeployment";
    value: {
        id: {
            owner: string;
            dseq: string;
        };
        groups: {
            name: string;
            requirements: {
                signed_by: {
                    all_of: string[];
                    any_of: string[];
                };
                attributes: {
                    key: string;
                    value: string;
                }[];
            };
            resources: {
                resources: {
                    cpu: {
                        units: {
                            val: Uint8Array;
                        };
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    };
                    memory: {
                        quantity: {
                            val: Uint8Array;
                        };
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    };
                    storage: {
                        name: string;
                        quantity: {
                            val: Uint8Array;
                        };
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    }[];
                    endpoints: {
                        kind: number;
                        sequence_number: number;
                    }[];
                };
                count: number;
                price: {
                    denom: string;
                    amount: string;
                };
            }[];
        }[];
        version: Uint8Array;
        deposit: {
            denom: string;
            amount: string;
        };
        depositor: string;
    };
}
export interface MsgDepositDeploymentAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgDepositDeployment";
    value: {
        id: {
            owner: string;
            dseq: string;
        };
        amount: {
            denom: string;
            amount: string;
        };
        depositor: string;
    };
}
export interface MsgUpdateDeploymentAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgUpdateDeployment";
    value: {
        id: {
            owner: string;
            dseq: string;
        };
        version: Uint8Array;
    };
}
export interface MsgCloseDeploymentAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgCloseDeployment";
    value: {
        id: {
            owner: string;
            dseq: string;
        };
    };
}
export interface MsgCloseGroupAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgCloseGroup";
    value: {
        id: {
            owner: string;
            dseq: string;
            gseq: number;
        };
    };
}
export interface MsgPauseGroupAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgPauseGroup";
    value: {
        id: {
            owner: string;
            dseq: string;
            gseq: number;
        };
    };
}
export interface MsgStartGroupAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgStartGroup";
    value: {
        id: {
            owner: string;
            dseq: string;
            gseq: number;
        };
    };
}
export declare const AminoConverter: {
    "/akash.deployment.v1beta2.MsgCreateDeployment": {
        aminoType: string;
        toAmino: ({ id, groups, version, deposit, depositor }: MsgCreateDeployment) => MsgCreateDeploymentAminoType["value"];
        fromAmino: ({ id, groups, version, deposit, depositor }: MsgCreateDeploymentAminoType["value"]) => MsgCreateDeployment;
    };
    "/akash.deployment.v1beta2.MsgDepositDeployment": {
        aminoType: string;
        toAmino: ({ id, amount, depositor }: MsgDepositDeployment) => MsgDepositDeploymentAminoType["value"];
        fromAmino: ({ id, amount, depositor }: MsgDepositDeploymentAminoType["value"]) => MsgDepositDeployment;
    };
    "/akash.deployment.v1beta2.MsgUpdateDeployment": {
        aminoType: string;
        toAmino: ({ id, version }: MsgUpdateDeployment) => MsgUpdateDeploymentAminoType["value"];
        fromAmino: ({ id, version }: MsgUpdateDeploymentAminoType["value"]) => MsgUpdateDeployment;
    };
    "/akash.deployment.v1beta2.MsgCloseDeployment": {
        aminoType: string;
        toAmino: ({ id }: MsgCloseDeployment) => MsgCloseDeploymentAminoType["value"];
        fromAmino: ({ id }: MsgCloseDeploymentAminoType["value"]) => MsgCloseDeployment;
    };
    "/akash.deployment.v1beta2.MsgCloseGroup": {
        aminoType: string;
        toAmino: ({ id }: MsgCloseGroup) => MsgCloseGroupAminoType["value"];
        fromAmino: ({ id }: MsgCloseGroupAminoType["value"]) => MsgCloseGroup;
    };
    "/akash.deployment.v1beta2.MsgPauseGroup": {
        aminoType: string;
        toAmino: ({ id }: MsgPauseGroup) => MsgPauseGroupAminoType["value"];
        fromAmino: ({ id }: MsgPauseGroupAminoType["value"]) => MsgPauseGroup;
    };
    "/akash.deployment.v1beta2.MsgStartGroup": {
        aminoType: string;
        toAmino: ({ id }: MsgStartGroup) => MsgStartGroupAminoType["value"];
        fromAmino: ({ id }: MsgStartGroupAminoType["value"]) => MsgStartGroup;
    };
};
