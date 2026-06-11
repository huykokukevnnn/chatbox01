import * as Blockly from 'blockly';
import { FieldMultilineInput } from '@blockly/field-multilineinput';

// Register the multiline input field
Blockly.fieldRegistry.register('field_multilineinput', FieldMultilineInput);

export const getBlockDefinitions = () => {
  return [
    // --- MAIN CONFIGURATION WRAPPERS ---
    {
      "type": "config_header",
      "message0": "🤖 Cấu hình Chatbot",
      "colour": 180,
      "nextStatement": null
    },
    {
      "type": "wrapper_persona",
      "message0": "Chatbot nên đóng vai ai? %1",
      "args0": [{ "type": "input_statement", "name": "DO", "check": "Persona" }],
      "colour": 230,
      "previousStatement": null,
      "nextStatement": null
    },
    {
      "type": "wrapper_users",
      "message0": "Đối tượng người dùng là ai? %1",
      "args0": [{ "type": "input_statement", "name": "DO", "check": "Users" }],
      "colour": 120,
      "previousStatement": null,
      "nextStatement": null
    },
    {
      "type": "wrapper_tone",
      "message0": "Giọng điệu và thái độ ra sao? %1",
      "args0": [{ "type": "input_statement", "name": "DO", "check": "Tone" }],
      "colour": 280,
      "previousStatement": null,
      "nextStatement": null
    },
    {
      "type": "wrapper_theories",
      "message0": "Kết hợp các lý thuyết học tập: %1",
      "args0": [{ "type": "input_statement", "name": "DO", "check": "Theories" }],
      "colour": 30,
      "previousStatement": null,
      "nextStatement": null
    },
    {
      "type": "wrapper_process",
      "message0": "Quy trình xử lý: %1",
      "args0": [{ "type": "input_statement", "name": "DO", "check": "Process" }],
      "colour": 45,
      "previousStatement": null,
      "nextStatement": null
    },
    {
      "type": "wrapper_limitations",
      "message0": "Phạm vi và Giới hạn: %1",
      "args0": [{ "type": "input_statement", "name": "DO", "check": "Limitations" }],
      "colour": 0,
      "previousStatement": null,
      "nextStatement": null
    },

    // --- PERSONA (Màu Xanh lam: 230) ---
    { "type": "persona_custom", "message0": "⚙️ Đóng vai: %1", "args0": [{ "type": "field_multilineinput", "name": "TEXT", "text": "Nhập vai trò..." }], "colour": 230, "previousStatement": "Persona", "nextStatement": "Persona" },
    { "type": "persona_science_whiz", "message0": "🧪 Chuyên gia Khoa học", "colour": 230, "previousStatement": "Persona", "nextStatement": "Persona" },
    { "type": "persona_pop_culture", "message0": "🎤 Bậc thầy Văn hóa Đại chúng", "colour": 230, "previousStatement": "Persona", "nextStatement": "Persona" },
    { "type": "persona_fitness", "message0": "🏋️ Đam mê Thể hình", "colour": 230, "previousStatement": "Persona", "nextStatement": "Persona" },
    { "type": "persona_diy", "message0": "🛠️ Chuyên gia Tự làm (DIY)", "colour": 230, "previousStatement": "Persona", "nextStatement": "Persona" },
    { "type": "persona_educator", "message0": "👶 Giáo viên Mầm non", "colour": 230, "previousStatement": "Persona", "nextStatement": "Persona" },
    { "type": "persona_teacher", "message0": "👨‍🏫 Giáo viên Lớp 8", "colour": 230, "previousStatement": "Persona", "nextStatement": "Persona" },
    { "type": "persona_assistant", "message0": "☕ Trợ lý Cá nhân", "colour": 230, "previousStatement": "Persona", "nextStatement": "Persona" },
    { "type": "persona_alien", "message0": "👽 Người ngoài hành tinh bí ẩn", "colour": 230, "previousStatement": "Persona", "nextStatement": "Persona" },
    { "type": "persona_spy", "message0": "🕵️ Điệp viên Anh quốc", "colour": 230, "previousStatement": "Persona", "nextStatement": "Persona" },

    // --- USERS (Màu Xanh lá: 120) ---
    { "type": "users_custom", "message0": "👥 Đối tượng: %1", "args0": [{ "type": "field_multilineinput", "name": "TEXT", "text": "Nhập đối tượng..." }], "colour": 120, "previousStatement": "Users", "nextStatement": "Users" },
    { "type": "users_parents", "message0": "👨‍👩‍👧 Phụ huynh có con nhỏ", "colour": 120, "previousStatement": "Users", "nextStatement": "Users" },
    { "type": "users_tutoring", "message0": "📚 Học sinh cần gia sư", "colour": 120, "previousStatement": "Users", "nextStatement": "Users" },
    { "type": "users_career", "message0": "💼 Sinh viên khám phá nghề nghiệp", "colour": 120, "previousStatement": "Users", "nextStatement": "Users" },
    { "type": "users_age_group", "message0": "👦 Độ tuổi người dùng: %1", "args0": [{ "type": "field_dropdown", "name": "AGE", "options": [["Tiểu học", "tiểu học"], ["Trung học cơ sở", "trung học cơ sở"], ["Trung học phổ thông", "trung học phổ thông"], ["Đại học", "đại học"], ["Người trưởng thành", "người trưởng thành"]] }], "colour": 120, "previousStatement": "Users", "nextStatement": "Users" },
    { "type": "users_expertise", "message0": "🎓 Trình độ chuyên môn: %1", "args0": [{ "type": "field_dropdown", "name": "LEVEL", "options": [["Người mới bắt đầu", "người mới bắt đầu"], ["Trung cấp", "trung cấp"], ["Chuyên gia", "chuyên gia"]] }], "colour": 120, "previousStatement": "Users", "nextStatement": "Users" },

    // --- TONE (Màu Tím: 280) ---
    { "type": "tone_custom", "message0": "🎭 Giọng điệu: %1", "args0": [{ "type": "field_multilineinput", "name": "TEXT", "text": "Nhập giọng điệu..." }], "colour": 280, "previousStatement": "Tone", "nextStatement": "Tone" },
    { "type": "tone_warm", "message0": "☕ Giọng điệu ấm áp và chào đón", "colour": 280, "previousStatement": "Tone", "nextStatement": "Tone" },
    { "type": "tone_formal", "message0": "👔 Giọng điệu trang trọng và chuyên nghiệp", "colour": 280, "previousStatement": "Tone", "nextStatement": "Tone" },
    { "type": "tone_playful", "message0": "🐱 Giọng điệu vui vẻ và hài hước", "colour": 280, "previousStatement": "Tone", "nextStatement": "Tone" },
    { "type": "tone_supportive", "message0": "💬 Tương tác một cách thân thiện và hỗ trợ", "colour": 280, "previousStatement": "Tone", "nextStatement": "Tone" },
    { "type": "tone_inquisitive", "message0": "🤔 Giọng điệu tò mò và ham học hỏi", "colour": 280, "previousStatement": "Tone", "nextStatement": "Tone" },
    { "type": "tone_direct", "message0": "🎯 Giọng điệu trực tiếp và ngắn gọn", "colour": 280, "previousStatement": "Tone", "nextStatement": "Tone" },

    // --- LEARNING THEORIES (Màu Nâu Nhạt: 30) ---
    { "type": "theory_custom", "message0": "💡 Lý thuyết: %1", "args0": [{ "type": "field_multilineinput", "name": "TEXT", "text": "Nhập lý thuyết..." }], "colour": 30, "previousStatement": "Theories", "nextStatement": "Theories" },
    { "type": "theory_constructivism", "message0": "🧠 Thuyết Kiến tạo", "colour": 30, "previousStatement": "Theories", "nextStatement": "Theories" },
    { "type": "theory_backwards", "message0": "🎯 Thiết kế ngược", "colour": 30, "previousStatement": "Theories", "nextStatement": "Theories" },
    { "type": "theory_blooms", "message0": "📚 Thang nhận thức Bloom", "colour": 30, "previousStatement": "Theories", "nextStatement": "Theories" },
    { "type": "theory_contrasting", "message0": "⚖️ Các trường hợp đối lập", "colour": 30, "previousStatement": "Theories", "nextStatement": "Theories" },
    { "type": "theory_cognitive", "message0": "💡 Thuyết tải trọng nhận thức", "colour": 30, "previousStatement": "Theories", "nextStatement": "Theories" },
    { "type": "theory_spaced", "message0": "🔁 Lặp lại ngắt quãng", "colour": 30, "previousStatement": "Theories", "nextStatement": "Theories" },
    { "type": "theory_social", "message0": "👥 Thuyết học tập xã hội", "colour": 30, "previousStatement": "Theories", "nextStatement": "Theories" },
    { "type": "theory_experiential", "message0": "🎓 Học tập qua trải nghiệm", "colour": 30, "previousStatement": "Theories", "nextStatement": "Theories" },
    { "type": "theory_metacognition", "message0": "💭 Siêu nhận thức", "colour": 30, "previousStatement": "Theories", "nextStatement": "Theories" },

    // --- PROCESS (Màu Vàng Đất: 45) ---
    { "type": "process_custom", "message0": "🔁 Quy trình: %1", "args0": [{ "type": "field_multilineinput", "name": "TEXT", "text": "Nhập quy trình..." }], "colour": 45, "previousStatement": "Process", "nextStatement": "Process" },
    { "type": "process_first_then", "message0": "🔢 Đầu tiên %1 , sau đó %2", "args0": [{ "type": "field_input", "name": "FIRST", "text": "xác định mục tiêu" }, { "type": "field_input", "name": "THEN", "text": "đưa ra chiến lược" }], "colour": 45, "previousStatement": "Process", "nextStatement": "Process" },
    { "type": "process_next", "message0": "⬇️ Tiếp theo %1", "args0": [{ "type": "field_input", "name": "TEXT", "text": "làm điều này..." }], "colour": 45, "previousStatement": "Process", "nextStatement": "Process" },
    { "type": "process_finally", "message0": "🏁 Cuối cùng %1", "args0": [{ "type": "field_input", "name": "TEXT", "text": "làm điều này..." }], "colour": 45, "previousStatement": "Process", "nextStatement": "Process" },

    // --- LIMITATIONS (Màu Đỏ Đất: 0) ---
    { "type": "limit_scope", "message0": "🛑 Giới hạn: %1", "args0": [{ "type": "field_multilineinput", "name": "TEXT", "text": "Nhập giới hạn..." }], "colour": 0, "previousStatement": "Limitations", "nextStatement": "Limitations" },
    { "type": "limit_brief", "message0": "📄 Giữ câu trả lời ngắn gọn", "colour": 0, "previousStatement": "Limitations", "nextStatement": "Limitations" },
    { "type": "limit_output_format", "message0": "📋 Định dạng đầu ra ưu tiên %1", "args0": [{ "type": "field_dropdown", "name": "FORMAT", "options": [["Danh sách", "danh sách"], ["Đoạn văn", "đoạn văn"], ["Bảng", "bảng"]] }], "colour": 0, "previousStatement": "Limitations", "nextStatement": "Limitations" },
    { "type": "limit_no_relationship", "message0": "💔 Không khuyên chuyện tình cảm cá nhân", "colour": 0, "previousStatement": "Limitations", "nextStatement": "Limitations" },
    { "type": "limit_screen_time", "message0": "📱 Khuyên giới hạn thời gian dùng thiết bị", "colour": 0, "previousStatement": "Limitations", "nextStatement": "Limitations" },
    { "type": "limit_stay_subject", "message0": "📍 Bám sát chủ đề: %1", "args0": [{ "type": "field_input", "name": "SUBJECT", "text": "Chủ đề chính" }], "colour": 0, "previousStatement": "Limitations", "nextStatement": "Limitations" },
    { "type": "limit_integrity", "message0": "💯 Thúc đẩy tính trung thực học thuật", "colour": 0, "previousStatement": "Limitations", "nextStatement": "Limitations" },
    { "type": "limit_stay_positive", "message0": "😊 Giữ thái độ tích cực", "colour": 0, "previousStatement": "Limitations", "nextStatement": "Limitations" },
    { "type": "limit_no_medical", "message0": "⚕️ Không đưa lời khuyên y tế", "colour": 0, "previousStatement": "Limitations", "nextStatement": "Limitations" },
    { "type": "limit_no_current_events", "message0": "📰 Không bàn về sự kiện thời sự", "colour": 0, "previousStatement": "Limitations", "nextStatement": "Limitations" },

    // --- REFERENCES (Màu Xanh Ngọc: 160) ---
    { "type": "ref_document", "message0": "📄 Tài liệu tham khảo: %1", "args0": [{ "type": "field_input", "name": "TEXT", "text": "(chưa chọn tệp)" }], "colour": 160, "previousStatement": null, "nextStatement": null },
    { "type": "ref_google_doc", "message0": "🔺 Google Doc: %1", "args0": [{ "type": "field_input", "name": "LINK", "text": "(dán link Google Doc)" }], "colour": 160, "previousStatement": null, "nextStatement": null },

    // --- ADJECTIVES (Màu Xanh Tím: 230) ---
    { "type": "adj_custom", "message0": "✍️ Tính từ: %1", "args0": [{ "type": "field_multilineinput", "name": "TEXT", "text": "Nhập tính từ..." }], "colour": 230, "previousStatement": null, "nextStatement": null },
    { "type": "adj_knowledgeable", "message0": "🧠 am hiểu", "colour": 230, "previousStatement": null, "nextStatement": null },
    { "type": "adj_experienced", "message0": "🌟 giàu kinh nghiệm", "colour": 230, "previousStatement": null, "nextStatement": null },
    { "type": "adj_friendly", "message0": "🤝 thân thiện", "colour": 230, "previousStatement": null, "nextStatement": null },
    { "type": "adj_approachable", "message0": "👋 dễ gần", "colour": 230, "previousStatement": null, "nextStatement": null },
    { "type": "adj_supportive", "message0": "💪 hỗ trợ", "colour": 230, "previousStatement": null, "nextStatement": null },
    { "type": "adj_reassuring", "message0": "🛡️ trấn an", "colour": 230, "previousStatement": null, "nextStatement": null },
    { "type": "adj_encouraging", "message0": "👏 khích lệ", "colour": 230, "previousStatement": null, "nextStatement": null },
    { "type": "adj_authoritative", "message0": "👑 có thẩm quyền", "colour": 230, "previousStatement": null, "nextStatement": null }
  ];
};

export const registerGenerators = (generator) => {
  if (!generator.forBlock) {
    generator.forBlock = {};
  }
  
  // Đảm bảo các khối được quét nối tiếp nhau một cách an toàn
  generator.scrub_ = function(block, code, opt_thisOnly) {
    let nextCode = '';
    if (block.nextConnection && block.nextConnection.targetBlock()) {
      nextCode = generator.blockToCode(block.nextConnection.targetBlock());
    }
    return code + nextCode;
  };

  const getInnerCode = (block, inputName) => {
    const targetBlock = block.getInputTargetBlock(inputName);
    return targetBlock ? generator.blockToCode(targetBlock) : '';
  };

  // Wrappers Generators
  generator.forBlock['config_header'] = function() { return ""; };
  generator.forBlock['wrapper_persona'] = function(block) { return getInnerCode(block, 'DO'); };
  generator.forBlock['wrapper_users'] = function(block) { return getInnerCode(block, 'DO'); };
  generator.forBlock['wrapper_tone'] = function(block) { return getInnerCode(block, 'DO'); };
  generator.forBlock['wrapper_theories'] = function(block) { return getInnerCode(block, 'DO'); };
  generator.forBlock['wrapper_process'] = function(block) { return getInnerCode(block, 'DO'); };
  generator.forBlock['wrapper_limitations'] = function(block) { return getInnerCode(block, 'DO'); };

  const mapSimple = (type, outputText) => { generator.forBlock[type] = function() { return outputText + "\n"; }; };
  const mapInput = (type, prefix, fieldName) => { generator.forBlock[type] = function(block) { return prefix + (block.getFieldValue(fieldName) || "") + "\n"; }; };

  // Persona, Users, Tone, Theories (from previous step)
  mapInput('persona_custom', 'Hãy đóng vai: ', 'TEXT');
  mapSimple('persona_science_whiz', 'Hãy đóng vai: Một chuyên gia khoa học thông thái.');
  mapSimple('persona_pop_culture', 'Hãy đóng vai: Một bậc thầy về văn hóa đại chúng (Pop Culture).');
  mapSimple('persona_fitness', 'Hãy đóng vai: Một người đam mê thể hình và sức khỏe.');
  mapSimple('persona_diy', 'Hãy đóng vai: Một chuyên gia tự làm đồ thủ công (DIY Master).');
  mapSimple('persona_educator', 'Hãy đóng vai: Một giáo viên mầm non thân thiện và kiên nhẫn.');
  mapSimple('persona_teacher', 'Hãy đóng vai: Một giáo viên dạy lớp 8.');
  mapSimple('persona_assistant', 'Hãy đóng vai: Một trợ lý cá nhân đắc lực và chuyên nghiệp.');
  mapSimple('persona_alien', 'Hãy đóng vai: Một người ngoài hành tinh bí ẩn từ không gian.');
  mapSimple('persona_spy', 'Hãy đóng vai: Một điệp viên bí mật người Anh Quốc.');

  mapInput('users_custom', 'Đối tượng người dùng của bạn là: ', 'TEXT');
  mapSimple('users_parents', 'Đối tượng người dùng của bạn là: Những phụ huynh có con nhỏ.');
  mapSimple('users_tutoring', 'Đối tượng người dùng của bạn là: Những học sinh đang tìm kiếm gia sư.');
  mapSimple('users_career', 'Đối tượng người dùng của bạn là: Sinh viên đang khám phá và định hướng nghề nghiệp.');
  mapInput('users_age_group', 'Độ tuổi của người dùng là: ', 'AGE');
  mapInput('users_expertise', 'Trình độ chuyên môn của người dùng là: ', 'LEVEL');

  mapInput('tone_custom', 'Giọng điệu của bạn nên: ', 'TEXT');
  mapSimple('tone_warm', 'Giọng điệu của bạn nên: Ấm áp và chào đón.');
  mapSimple('tone_formal', 'Giọng điệu của bạn nên: Trang trọng và chuyên nghiệp.');
  mapSimple('tone_playful', 'Giọng điệu của bạn nên: Vui vẻ và hài hước.');
  mapSimple('tone_supportive', 'Hãy tương tác một cách: Thân thiện và luôn hỗ trợ người dùng.');
  mapSimple('tone_inquisitive', 'Giọng điệu của bạn nên: Tò mở và ham học hỏi.');
  mapSimple('tone_direct', 'Giọng điệu của bạn nên: Trực tiếp, đi thẳng vào vấn đề và ngắn gọn.');

  mapSimple('theory_constructivism', 'Áp dụng: Thuyết Kiến tạo (Constructivism).');
  mapSimple('theory_backwards', 'Áp dụng: Thiết kế ngược (Backwards Design).');
  mapSimple('theory_blooms', 'Áp dụng: Thang nhận thức Bloom.');
  mapSimple('theory_contrasting', 'Sử dụng: Các trường hợp đối lập (Contrasting Cases).');
  mapSimple('theory_cognitive', 'Lưu ý: Thuyết tải trọng nhận thức (Cognitive Load Theory).');
  mapSimple('theory_spaced', 'Áp dụng: Lặp lại ngắt quãng (Spaced Repetition).');
  mapSimple('theory_social', 'Áp dụng: Thuyết học tập xã hội (Social Learning Theory).');
  mapSimple('theory_experiential', 'Áp dụng: Học tập qua trải nghiệm (Experiential Learning).');
  mapSimple('theory_metacognition', 'Khuyến khích: Siêu nhận thức (Metacognition).');
  mapInput('theory_custom', 'Áp dụng lý thuyết: ', 'TEXT');

  // Process
  mapInput('process_custom', 'Quy trình: ', 'TEXT');
  generator['process_first_then'] = function(block) {
    return `Quy trình: Đầu tiên ${block.getFieldValue('FIRST')}, sau đó ${block.getFieldValue('THEN')}\n`;
  };
  mapInput('process_next', 'Tiếp theo: ', 'TEXT');
  mapInput('process_finally', 'Cuối cùng: ', 'TEXT');

  // Limitations
  mapInput('limit_scope', 'Giới hạn phạm vi: ', 'TEXT');
  mapSimple('limit_brief', 'Yêu cầu: Giữ câu trả lời ngắn gọn.');
  mapInput('limit_output_format', 'Định dạng đầu ra ưu tiên là: ', 'FORMAT');
  mapSimple('limit_no_relationship', 'Tuyệt đối: Không đưa ra lời khuyên về chuyện tình cảm cá nhân.');
  mapSimple('limit_screen_time', 'Hãy khuyên người dùng giới hạn thời gian sử dụng thiết bị màn hình.');
  mapInput('limit_stay_subject', 'Luôn bám sát chủ đề: ', 'SUBJECT');
  mapSimple('limit_integrity', 'Thúc đẩy và bảo vệ tính trung thực học thuật.');
  mapSimple('limit_stay_positive', 'Luôn giữ thái độ tích cực trong mọi phản hồi.');
  mapSimple('limit_no_medical', 'Tuyệt đối: Không đưa ra bất kỳ lời khuyên y tế nào.');
  mapSimple('limit_no_current_events', 'Giới hạn: Không bàn luận về các sự kiện thời sự hay tin tức hiện tại.');

  // References
  mapInput('ref_document', 'Sử dụng tài liệu tham khảo: ', 'TEXT');
  mapInput('ref_google_doc', 'Tham khảo dữ liệu từ Google Doc: ', 'LINK');

  // Adjectives
  mapInput('adj_custom', 'Tính từ mô tả bạn: ', 'TEXT');
  mapSimple('adj_knowledgeable', 'Tính từ mô tả bạn: am hiểu.');
  mapSimple('adj_experienced', 'Tính từ mô tả bạn: giàu kinh nghiệm.');
  mapSimple('adj_friendly', 'Tính từ mô tả bạn: thân thiện.');
  mapSimple('adj_approachable', 'Tính từ mô tả bạn: dễ gần.');
  mapSimple('adj_supportive', 'Tính từ mô tả bạn: luôn hỗ trợ.');
  mapSimple('adj_reassuring', 'Tính từ mô tả bạn: biết cách trấn an.');
  mapSimple('adj_encouraging', 'Tính từ mô tả bạn: khích lệ.');
  mapSimple('adj_authoritative', 'Tính từ mô tả bạn: có thẩm quyền.');
};

export const getToolboxXml = () => {
  return `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <category name="Vai trò (Persona)" colour="230">
        <block type="persona_custom"></block>
        <block type="persona_science_whiz"></block>
        <block type="persona_pop_culture"></block>
        <block type="persona_fitness"></block>
        <block type="persona_diy"></block>
        <block type="persona_educator"></block>
        <block type="persona_teacher"></block>
        <block type="persona_assistant"></block>
        <block type="persona_alien"></block>
        <block type="persona_spy"></block>
      </category>
      <category name="Người dùng (Users)" colour="120">
        <block type="users_custom"></block>
        <block type="users_parents"></block>
        <block type="users_tutoring"></block>
        <block type="users_career"></block>
        <block type="users_age_group"></block>
        <block type="users_expertise"></block>
      </category>
      <category name="Giọng điệu (Tone)" colour="280">
        <block type="tone_custom"></block>
        <block type="tone_warm"></block>
        <block type="tone_formal"></block>
        <block type="tone_playful"></block>
        <block type="tone_supportive"></block>
        <block type="tone_inquisitive"></block>
        <block type="tone_direct"></block>
      </category>
      <category name="Lý thuyết học tập" colour="30">
        <block type="theory_custom"></block>
        <block type="theory_constructivism"></block>
        <block type="theory_backwards"></block>
        <block type="theory_blooms"></block>
        <block type="theory_contrasting"></block>
        <block type="theory_cognitive"></block>
        <block type="theory_spaced"></block>
        <block type="theory_social"></block>
        <block type="theory_experiential"></block>
        <block type="theory_metacognition"></block>
      </category>
      <category name="Quy trình (Process)" colour="45">
        <block type="process_custom"></block>
        <block type="process_first_then"></block>
        <block type="process_next"></block>
        <block type="process_finally"></block>
      </category>
      <category name="Giới hạn (Limitations)" colour="0">
        <block type="limit_scope"></block>
        <block type="limit_brief"></block>
        <block type="limit_output_format"></block>
        <block type="limit_no_relationship"></block>
        <block type="limit_screen_time"></block>
        <block type="limit_stay_subject"></block>
        <block type="limit_integrity"></block>
        <block type="limit_stay_positive"></block>
        <block type="limit_no_medical"></block>
        <block type="limit_no_current_events"></block>
      </category>
      <category name="Tài liệu (References)" colour="160">
        <block type="ref_document"></block>
        <block type="ref_google_doc"></block>
      </category>
      <category name="Tính từ (Adjectives)" colour="230">
        <block type="adj_custom"></block>
        <block type="adj_knowledgeable"></block>
        <block type="adj_experienced"></block>
        <block type="adj_friendly"></block>
        <block type="adj_approachable"></block>
        <block type="adj_supportive"></block>
        <block type="adj_reassuring"></block>
        <block type="adj_encouraging"></block>
        <block type="adj_authoritative"></block>
      </category>
    </xml>
  `;
};
