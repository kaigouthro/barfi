# TODOs

## Top

-   [ ] release 1.0.0

## P0

-   [x] migrate to poetry for better deps management and local dev experience
-   [x] test the static files build in src
-   [x] migrate frontend client to react
-   [x] migrate to using react-flow
    -   [x] add react-flow to the frontend src
    -   [x] custom nodes based on what was available from baklava.js, cutom design from the examples given
    -   [x] investigate the schema that react-flow generates
    -   [x] react-flow to barfi schema
    -   [x] test is the schema + compute engine works
    -   [x] test for naming multiple nodes of same type (add a number generator to increase it incrementally)
    -   [x] investigate schema sent from python st.client to the ui-client for making the migration possible
    -   [x] able to construct the graph given a schema
-   [x] make export in ui simple and handle migrations in the backend
-   [x] change custom node to base block node
-   [x] custom actions on react flow -> node store
    -   [x] delete node on ui -> del node in
-   [x] v1 types for editor state to export
    -   [x] nodes -> ??
    -   [x] remove id from interfaces.
    -   [x] migrate all the data types from both barfi and ui to match each other, as the conversion to and from the barfi state happens in the ui, which maintains the actual model
    -   [x] connections -> outputNode, outputNodeInterface, inputNode, inputNodeInterface
-   [x] add strong type cheing on the python side
-   [x] add schema version to the schema saved and sent from ui-flow
-   [x] test and check if options work
    -   [x] if options from schema are loaded
    -   [x] if options
-   [x] add text display option in the block
-   [x] fix type conversion for integer and number options
-   [x] state data are different across all the places.
    -   [x] when a component is loaded from schema to editor, option values must be loaded from the store. essentially option values must only be from the store.
    -   [x] when a block is loaded from barfi-state into editor, it must be transformed to be in type `Node`
    -   [x] keep node and baseBlock different. but you can refresh the nodes added to the editor from the baseblock.
    -   [x] migrate BarfitateNode to FlowStateNode.
-   [x] check data scemas and types across the app from base-block, node, base-block are different in py and ts
    -   [x] ideal should be blacks have only "name", nodes have name which is the label and type which is the name from baseblock
-   [x] migrate the TextOption to a display option with display as text
-   [x] check for redundant data types as name, type, label which would mean different acroos frontend and backend
-   [x] check for low haning TODOs across fe and be

## P1

-   [x] algorithm changes
    -   [x] move away from networkx
    -   [x] multiple root nodes, implying multple flows possible
    -   [x] find root nodes and create a execute graph
    -   [x] create a DAG and execute it
    -   [x] apply for multiple roots
-   [x] add compute engine for adding functional compute logic to blocks
-   [x] check if there are no duplicates of blocks with same block name, ex: results, result
-   [x] inputs and outputs in the flowschema store the value type and not the values themselves
-   [x] rename /frontend to ui-barfi and move it to archive to not confuse future devs
-   [x] Check all TODOs
-   [ ] release 1.0.0

## P2

-   [ ] Add deprecation warning for st_barfi
-   [ ] Add custom commands, to make it customize to act upon a command bar of tools and commmands and how to render them on the ui
-   [ ] use the theme props given by the newer streamlit clients
-   [ ] move barfi client to separate pkg
-   [ ] add possibility for cyclic compute graph
