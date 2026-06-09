import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { getBlockDefinitions, registerGenerators, getToolboxXml } from './blockDefinitions';

const BlocklyWorkspace = forwardRef(({ onSystemPromptChange }, ref) => {
  const blocklyDiv = useRef(null);
  const workspace = useRef(null);

  useImperativeHandle(ref, () => ({
    getWorkspaceData: () => {
      if (!workspace.current) return null;
      return Blockly.serialization.workspaces.save(workspace.current);
    },
    loadWorkspaceData: (data) => {
      if (!workspace.current || !data) return;
      Blockly.serialization.workspaces.load(data, workspace.current);
    },
    resetWorkspace: () => {
      if (workspace.current) {
        workspace.current.clear();
        const header = workspace.current.newBlock('config_header');
        header.initSvg(); header.render(); header.moveBy(20, 20); header.setDeletable(false);
        const wrappers = ['wrapper_persona', 'wrapper_users', 'wrapper_tone', 'wrapper_theories', 'wrapper_process', 'wrapper_limitations'];
        let currentBlock = header;
        wrappers.forEach(type => {
          const wBlock = workspace.current.newBlock(type);
          wBlock.initSvg(); wBlock.render(); wBlock.setDeletable(false);
          currentBlock.nextConnection.connect(wBlock.previousConnection);
          currentBlock = wBlock;
        });
      }
    }
  }));

  useEffect(() => {
    // Define custom blocks
    const blockDefs = getBlockDefinitions();
    try { Blockly.defineBlocksWithJsonArray(blockDefs); } catch (e) {}

    // Register generators using the built-in javascriptGenerator
    registerGenerators(javascriptGenerator);

    // Initialize workspace
    if (blocklyDiv.current && !workspace.current) {
      workspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: getToolboxXml(),
        scrollbars: true,
        trashcan: true
      });

      // Thêm các khối cấu hình mặc định (xếp dọc, có móc nối)
      const addDefaultBlocks = () => {
        workspace.current.clear();
        
        const header = workspace.current.newBlock('config_header');
        header.initSvg(); header.render(); header.moveBy(20, 20); header.setDeletable(false);

        const wrappers = ['wrapper_persona', 'wrapper_users', 'wrapper_tone', 'wrapper_theories', 'wrapper_process', 'wrapper_limitations'];
        let currentBlock = header;

        wrappers.forEach(type => {
          const wBlock = workspace.current.newBlock(type);
          wBlock.initSvg(); 
          wBlock.render(); 
          wBlock.setDeletable(false);
          currentBlock.nextConnection.connect(wBlock.previousConnection);
          currentBlock = wBlock;
        });
      };
      addDefaultBlocks();

      // Listen to changes to generate code
      workspace.current.addChangeListener(() => {
        try {
          let generatedPrompt = "Hãy giao tiếp hoàn toàn bằng Tiếng Việt.\\n";
          
          // Tạo code từ toàn bộ workspace thay vì chỉ getTopBlocks
          generatedPrompt += javascriptGenerator.workspaceToCode(workspace.current) || "";
          
          onSystemPromptChange(generatedPrompt);
        } catch (error) {
          onSystemPromptChange("ERROR GENERATING PROMPT:\\n" + error.message + "\\n" + error.stack);
        }
      });
    }

    return () => {
      // Cleanup
      if (workspace.current) {
        workspace.current.dispose();
        workspace.current = null;
      }
    };
  }, []);

  const handleReset = () => {
    if(workspace.current) {
      workspace.current.clear();

      const header = workspace.current.newBlock('config_header');
      header.initSvg(); header.render(); header.moveBy(20, 20); header.setDeletable(false);

      const wrappers = ['wrapper_persona', 'wrapper_users', 'wrapper_tone', 'wrapper_theories', 'wrapper_process', 'wrapper_limitations'];
      let currentBlock = header;

      wrappers.forEach(type => {
        const wBlock = workspace.current.newBlock(type);
        wBlock.initSvg(); 
        wBlock.render(); 
        wBlock.setDeletable(false);
        currentBlock.nextConnection.connect(wBlock.previousConnection);
        currentBlock = wBlock;
      });
    }
  };

  const handleGenerateRandom = () => {
    if (!workspace.current) return;
    
    // Gọi hàm reset để tạo lại khung
    handleReset();

    const categories = {
      wrapper_persona: ['persona_science_whiz', 'persona_pop_culture', 'persona_fitness', 'persona_diy', 'persona_educator', 'persona_teacher', 'persona_assistant', 'persona_alien', 'persona_spy'],
      wrapper_users: ['users_parents', 'users_tutoring', 'users_career'],
      wrapper_tone: ['tone_warm', 'tone_formal', 'tone_playful', 'tone_supportive', 'tone_inquisitive', 'tone_direct'],
      wrapper_theories: ['theory_constructivism', 'theory_backwards', 'theory_blooms', 'theory_contrasting', 'theory_cognitive', 'theory_spaced', 'theory_social', 'theory_experiential', 'theory_metacognition'],
      wrapper_limitations: ['limit_brief', 'limit_no_relationship', 'limit_screen_time', 'limit_integrity', 'limit_stay_positive', 'limit_no_medical', 'limit_no_current_events']
    };

    // Tìm các wrapper block trên workspace
    const blocks = workspace.current.getAllBlocks(false);
    
    Object.entries(categories).forEach(([wrapperType, options]) => {
      const randomType = options[Math.floor(Math.random() * options.length)];
      const newBlock = workspace.current.newBlock(randomType);
      newBlock.initSvg();
      newBlock.render();
      
      const wrapperBlock = blocks.find(b => b.type === wrapperType);
      if (wrapperBlock) {
        const input = wrapperBlock.getInput('DO');
        if (input && input.connection) {
          input.connection.connect(newBlock.previousConnection);
        }
      }
    });
  };

  return (
    <div className="blockly-wrapper">
      <div 
        ref={blocklyDiv} 
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '50px' }} 
      />
      <div className="blockly-footer" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <button className="btn btn-gray" onClick={handleGenerateRandom}>Tạo Chatbot Ngẫu nhiên</button>
        <button className="btn btn-outline-danger" onClick={handleReset}>Xóa Không gian làm việc</button>
      </div>
    </div>
  );
});

export default BlocklyWorkspace;
