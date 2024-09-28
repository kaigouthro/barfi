import { useEffect, useCallback } from "react";
import { withStreamlitConnection, Streamlit } from "streamlit-component-lib";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import {
    ReactFlowProvider,
    ReactFlow,
    Background,
    useNodesState,
    useEdgesState,
    MiniMap,
    Controls,
    Panel,
    addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import PanelContextMenu from "./components/flow/panel-context-menu";
import PanelRun from "./components/flow/panel-run";
import { BaseBlockNode } from "./components/nodes";
import { useFlowStateStore } from "./components/flow/flowState";
import { BarfiState } from "@/types";

export function App({ args }: { args: BarfiState }) {
    // console.log(args.base_blocks);
    // console.log(args.load_editor_schema);
    // const hiddenTriggerRef = useRef(null);

    const proOptions = { hideAttribution: true };
    // const nodeTypes = useMemo(() => nodeTypes, []);

    // @ts-expect-error setNodes is not used
    const [nodes, setNodes, onNodesChange] = useNodesState([
        ...args.load_editor_schema.nodes,
    ]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([
        ...args.load_editor_schema.connections,
    ]);

    useEffect(() => {
        Streamlit.setFrameHeight();
    });

    const onConnect = useCallback(
        // @ts-expect-error params is not used
        (params) =>
            setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
        []
    );

    const setContextLocation = useFlowStateStore(
        (state) => state.setContextLocation
    );

    const onPanelContextClick = useCallback((e: React.MouseEvent) => {
        setContextLocation(e.clientX, e.clientY);
        // e.preventDefault();
        // console.log(e);
        // // https://github.com/radix-ui/primitives/issues/1307
        // if (hiddenTriggerRef.current) {
        //     const contextMenuEvent = new MouseEvent("contextmenu", {
        //         bubbles: true,
        //         clientX: e.clientX,
        //         clientY: e.clientY,
        //     });
        //     (hiddenTriggerRef.current as HTMLElement).dispatchEvent(
        //         contextMenuEvent
        //     );
        // }
    }, []);

    return (
        <div className="border rounded-md w-full h-[36rem]">
            <ReactFlowProvider>
                <ContextMenu>
                    <ContextMenuTrigger asChild>
                        {/* <div ref={hiddenTriggerRef} /> */}
                        <ReactFlow
                            nodeTypes={{ baseBlock: BaseBlockNode }}
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            onContextMenu={onPanelContextClick}
                            fitView={true}
                            fitViewOptions={{ padding: 0.75 }}
                            proOptions={proOptions}
                            nodesDraggable
                            minZoom={0}
                            onDelete={(p) => console.log(p)}
                        >
                            <Background color="#aaa" gap={16} />
                            <MiniMap position="top-right" />
                            <Controls position="top-left" />
                            <Panel position="bottom-right">
                                <PanelRun
                                    onClickRun={Streamlit.setComponentValue}
                                />
                            </Panel>
                        </ReactFlow>
                    </ContextMenuTrigger>
                    <PanelContextMenu baseBlocks={args["base_blocks"]} />
                </ContextMenu>
            </ReactFlowProvider>
        </div>
    );
}

const StreamlitAppComponent = withStreamlitConnection(App);
export default StreamlitAppComponent;
