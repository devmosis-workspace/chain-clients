import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as dymensionRollappTxRegistry from "../dymension/rollapp/tx.registry";
import * as dymensionSequencerTxRegistry from "../dymension/sequencer/tx.registry";
import * as dymensionRollappTxAmino from "../dymension/rollapp/tx.amino";
import * as dymensionSequencerTxAmino from "../dymension/sequencer/tx.amino";
export const dymensionxyzAminoConverters = {
  ...dymensionRollappTxAmino.AminoConverter,
  ...dymensionSequencerTxAmino.AminoConverter
};
export const dymensionxyzProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...dymensionRollappTxRegistry.registry, ...dymensionSequencerTxRegistry.registry];
export const getSigningDymensionxyzClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...dymensionxyzProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...dymensionxyzAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningDymensionxyzClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningDymensionxyzClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};