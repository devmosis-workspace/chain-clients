import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
export interface MsgCreateDeploymentAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta1.MsgCreateDeployment";
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
                        quantity: {
                            val: Uint8Array;
                        };
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    };
                    endpoints: {
                        kind: number;
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
    };
}
export interface MsgDepositDeploymentAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta1.MsgDepositDeployment";
    value: {
        id: {
            owner: string;
            dseq: string;
        };
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgUpdateDeploymentAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta1.MsgUpdateDeployment";
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
                        quantity: {
                            val: Uint8Array;
                        };
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    };
                    endpoints: {
                        kind: number;
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
    };
}
export interface MsgCloseDeploymentAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta1.MsgCloseDeployment";
    value: {
        id: {
            owner: string;
            dseq: string;
        };
    };
}
export interface MsgCloseGroupAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta1.MsgCloseGroup";
    value: {
        id: {
            owner: string;
            dseq: string;
            gseq: number;
        };
    };
}
export interface MsgPauseGroupAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta1.MsgPauseGroup";
    value: {
        id: {
            owner: string;
            dseq: string;
            gseq: number;
        };
    };
}
export interface MsgStartGroupAminoType extends AminoMsg {
    type: "/akash.deployment.v1beta1.MsgStartGroup";
    value: {
        id: {
            owner: string;
            dseq: string;
            gseq: number;
        };
    };
}
export declare const AminoConverter: {
    "/akash.deployment.v1beta1.MsgCreateDeployment": {
        aminoType: string;
        toAmino: ({ id, groups, version, deposit }: MsgCreateDeployment) => MsgCreateDeploymentAminoType["value"];
        fromAmino: ({ id, groups, version, deposit }: MsgCreateDeploymentAminoType["value"]) => MsgCreateDeployment;
    };
    "/akash.deployment.v1beta1.MsgDepositDeployment": {
        aminoType: string;
        toAmino: ({ id, amount }: MsgDepositDeployment) => MsgDepositDeploymentAminoType["value"];
        fromAmino: ({ id, amount }: MsgDepositDeploymentAminoType["value"]) => MsgDepositDeployment;
    };
    "/akash.deployment.v1beta1.MsgUpdateDeployment": {
        aminoType: string;
        toAmino: ({ id, groups, version }: MsgUpdateDeployment) => MsgUpdateDeploymentAminoType["value"];
        fromAmino: ({ id, groups, version }: MsgUpdateDeploymentAminoType["value"]) => MsgUpdateDeployment;
    };
    "/akash.deployment.v1beta1.MsgCloseDeployment": {
        aminoType: string;
        toAmino: ({ id }: MsgCloseDeployment) => MsgCloseDeploymentAminoType["value"];
        fromAmino: ({ id }: MsgCloseDeploymentAminoType["value"]) => MsgCloseDeployment;
    };
    "/akash.deployment.v1beta1.MsgCloseGroup": {
        aminoType: string;
        toAmino: ({ id }: MsgCloseGroup) => MsgCloseGroupAminoType["value"];
        fromAmino: ({ id }: MsgCloseGroupAminoType["value"]) => MsgCloseGroup;
    };
    "/akash.deployment.v1beta1.MsgPauseGroup": {
        aminoType: string;
        toAmino: ({ id }: MsgPauseGroup) => MsgPauseGroupAminoType["value"];
        fromAmino: ({ id }: MsgPauseGroupAminoType["value"]) => MsgPauseGroup;
    };
    "/akash.deployment.v1beta1.MsgStartGroup": {
        aminoType: string;
        toAmino: ({ id }: MsgStartGroup) => MsgStartGroupAminoType["value"];
        fromAmino: ({ id }: MsgStartGroupAminoType["value"]) => MsgStartGroup;
    };
};
