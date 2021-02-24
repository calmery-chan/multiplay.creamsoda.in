import { Socket } from "socket.io";

export type MultiplayArea = "cloud" | "meadow" | "sea";

export type MultiplaySocket = Socket & {
  groupId?: string;
};

/* --- Join --- */

// Payload

export type MultiplayJoinPayload = string | undefined

// Response

export type MultiplayJoinGroupResponse = string[];

export type MultiplayJoinResponse = MultiplayJoinGroupResponse;

/* --- Leave --- */

// Response

export type MultiplayLeaveGroupResponse = string[];

/* --- Update --- */

// Payload

export type MultiplayUpdatePayload = {
  area: MultiplayArea;
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    y: number;
  };
  state: "idle" | "run" | "walk"
};

// Response

export type MultiplayUpdateResponse = {
  playerId: string;
  payload: MultiplayUpdatePayload & {
    updatedAt: number
  };
};
