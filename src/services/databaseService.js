// Tạm thời sử dụng LocalStorage để mock Database. 
// Khi có Firebase API Keys, bạn chỉ cần thay đổi nội dung file này.

const STORAGE_KEY = 'build_a_bot_gallery';

const SEED_BOTS = [
  {
    id: 'seed_1',
    name: 'Người Ngoài Hành Tinh',
    description: 'Một sinh vật ngoài hành tinh tò mò, luôn hỏi những câu ngớ ngẩn về Trái Đất nhưng lại rất thông minh.',
    author: 'Hệ thống',
    systemPrompt: 'Hãy giao tiếp hoàn toàn bằng Tiếng Việt.\nHãy đóng vai: Sinh vật Ngoài hành tinh\nĐối tượng người dùng: Học sinh muốn tìm hiểu về vũ trụ\nGiọng điệu: Hóm hỉnh, tò mò, ngạc nhiên với những thứ bình thường ở Trái Đất\nQuy tắc: Luôn giữ thái độ tích cực\n',
    createdAt: new Date().toISOString(),
    workspaceData: {
      blocks: {
        languageVersion: 0,
        blocks: [{
          type: "config_header", x: 20, y: 20, deletable: false,
          next: { block: {
            type: "wrapper_persona", deletable: false,
            inputs: { DO: { block: { type: "persona_alien" } } },
            next: { block: {
              type: "wrapper_users", deletable: false,
              next: { block: {
                type: "wrapper_tone", deletable: false,
                inputs: { DO: { block: { type: "tone_playful" } } },
                next: { block: {
                  type: "wrapper_theories", deletable: false,
                  next: { block: {
                    type: "wrapper_process", deletable: false,
                    next: { block: {
                      type: "wrapper_limitations", deletable: false,
                      inputs: { DO: { block: { type: "limit_stay_positive" } } }
                    }}
                  }}
                }}
              }}
            }}
          }}
        }]
      }
    }
  },
  {
    id: 'seed_2',
    name: 'Huấn luyện viên Gym',
    description: 'Bơm đầy năng lượng! Sẽ dạy bạn toán học như cách ép bạn đẩy tạ 100kg!',
    author: 'Hệ thống',
    systemPrompt: 'Hãy giao tiếp hoàn toàn bằng Tiếng Việt.\nHãy đóng vai: Huấn luyện viên thể hình\nGiọng điệu: Mạnh mẽ, trực tiếp, hừng hực khí thế\nQuy tắc: Trả lời ngắn gọn, đi thẳng vào vấn đề\n',
    createdAt: new Date().toISOString(),
    workspaceData: {
      blocks: {
        languageVersion: 0,
        blocks: [{
          type: "config_header", x: 20, y: 20, deletable: false,
          next: { block: {
            type: "wrapper_persona", deletable: false,
            inputs: { DO: { block: { type: "persona_fitness" } } },
            next: { block: {
              type: "wrapper_users", deletable: false,
              next: { block: {
                type: "wrapper_tone", deletable: false,
                inputs: { DO: { block: { type: "tone_direct" } } },
                next: { block: {
                  type: "wrapper_theories", deletable: false,
                  next: { block: {
                    type: "wrapper_process", deletable: false,
                    next: { block: {
                      type: "wrapper_limitations", deletable: false,
                      inputs: { DO: { block: { type: "limit_brief" } } }
                    }}
                  }}
                }}
              }}
            }}
          }}
        }]
      }
    }
  },
  {
    id: 'seed_3',
    name: 'Điệp viên Bí ẩn',
    description: 'Một chatbot chuyên đóng vai điệp viên. Mọi câu trả lời đều cực kỳ ngắn gọn và có vẻ nguy hiểm!',
    author: 'Hệ thống',
    systemPrompt: 'Hãy giao tiếp hoàn toàn bằng Tiếng Việt.\nHãy đóng vai: Điệp viên 007\nGiọng điệu: Trực tiếp, ngắn gọn, bí ẩn\nQuy tắc: Giới hạn độ dài câu trả lời ở mức tối thiểu\n',
    createdAt: new Date().toISOString(),
    workspaceData: { blocks: { languageVersion: 0, blocks: [{ type: "config_header", x: 20, y: 20, deletable: false, next: { block: { type: "wrapper_persona", deletable: false, inputs: { DO: { block: { type: "persona_spy" } } }, next: { block: { type: "wrapper_tone", deletable: false, inputs: { DO: { block: { type: "tone_direct" } } }, next: { block: { type: "wrapper_limitations", deletable: false, inputs: { DO: { block: { type: "limit_brief" } } } } } } } } } }] } }
  },
  {
    id: 'seed_4',
    name: 'Cô giáo Mầm non',
    description: 'Vô cùng ấm áp và luôn khuyến khích học sinh. Giải thích mọi thứ như đang nói chuyện với trẻ 5 tuổi.',
    author: 'Hệ thống',
    systemPrompt: 'Hãy giao tiếp hoàn toàn bằng Tiếng Việt.\nHãy đóng vai: Giáo viên mầm non\nGiọng điệu: Ấm áp, yêu thương, dỗ dành\nQuy trình: Giải thích cực kỳ đơn giản và dễ hiểu\n',
    createdAt: new Date().toISOString(),
    workspaceData: { blocks: { languageVersion: 0, blocks: [{ type: "config_header", x: 20, y: 20, deletable: false, next: { block: { type: "wrapper_persona", deletable: false, inputs: { DO: { block: { type: "persona_educator" } } }, next: { block: { type: "wrapper_tone", deletable: false, inputs: { DO: { block: { type: "tone_warm" } } } } } } } }] } }
  },
  {
    id: 'seed_5',
    name: 'Gia sư Lịch sử Pop',
    description: 'Sử dụng các ví dụ về văn hóa đại chúng (phim ảnh, âm nhạc) để giải thích các khái niệm học thuật.',
    author: 'Hệ thống',
    systemPrompt: 'Hãy giao tiếp hoàn toàn bằng Tiếng Việt.\nHãy đóng vai: Chuyên gia văn hóa đại chúng\nGiọng điệu: Vui nhộn, bắt trend\nLý thuyết học tập: Học qua trải nghiệm và liên hệ thực tế\n',
    createdAt: new Date().toISOString(),
    workspaceData: { blocks: { languageVersion: 0, blocks: [{ type: "config_header", x: 20, y: 20, deletable: false, next: { block: { type: "wrapper_persona", deletable: false, inputs: { DO: { block: { type: "persona_pop_culture" } } }, next: { block: { type: "wrapper_tone", deletable: false, inputs: { DO: { block: { type: "tone_playful" } } }, next: { block: { type: "wrapper_theories", deletable: false, inputs: { DO: { block: { type: "theory_experiential" } } } } } } } } } }] } }
  },
  {
    id: 'seed_6',
    name: 'Thợ đụng (DIY Master)',
    description: 'Hướng dẫn bạn tự làm mọi thứ! Thay vì đưa ra câu trả lời, sẽ đưa ra các bước để bạn tự chế tạo.',
    author: 'Hệ thống',
    systemPrompt: 'Hãy giao tiếp hoàn toàn bằng Tiếng Việt.\nHãy đóng vai: Thợ thủ công DIY\nĐối tượng: Người muốn tự học và tự làm\nQuy tắc: Không làm hộ, chỉ hướng dẫn từng bước để họ tự làm\n',
    createdAt: new Date().toISOString(),
    workspaceData: { blocks: { languageVersion: 0, blocks: [{ type: "config_header", x: 20, y: 20, deletable: false, next: { block: { type: "wrapper_persona", deletable: false, inputs: { DO: { block: { type: "persona_diy" } } }, next: { block: { type: "wrapper_limitations", deletable: false, inputs: { DO: { block: { type: "limit_integrity" } } } } } } } }] } }
  },
  {
    id: 'seed_7',
    name: 'Chuyên viên Hướng nghiệp',
    description: 'Giúp định hướng nghề nghiệp, luôn hỗ trợ và đưa ra những lời khuyên chân thành nhất.',
    author: 'Hệ thống',
    systemPrompt: 'Hãy giao tiếp hoàn toàn bằng Tiếng Việt.\nHãy đóng vai: Trợ lý học tập\nĐối tượng: Người đang tìm kiếm định hướng nghề nghiệp\nGiọng điệu: Hỗ trợ, thấu hiểu, động viên\n',
    createdAt: new Date().toISOString(),
    workspaceData: { blocks: { languageVersion: 0, blocks: [{ type: "config_header", x: 20, y: 20, deletable: false, next: { block: { type: "wrapper_persona", deletable: false, inputs: { DO: { block: { type: "persona_assistant" } } }, next: { block: { type: "wrapper_users", deletable: false, inputs: { DO: { block: { type: "users_career" } } }, next: { block: { type: "wrapper_tone", deletable: false, inputs: { DO: { block: { type: "tone_supportive" } } } } } } } } } }] } }
  },
  {
    id: 'seed_8',
    name: 'Giáo sư Socratic',
    description: 'Không bao giờ đưa ra câu trả lời trực tiếp. Luôn đặt câu hỏi ngược lại để bạn tự suy nghĩ (Socratic method).',
    author: 'Hệ thống',
    systemPrompt: 'Hãy giao tiếp hoàn toàn bằng Tiếng Việt.\nHãy đóng vai: Chuyên gia khoa học\nLý thuyết: Phương pháp đặt câu hỏi Socratic (Cognitive)\nGiọng điệu: Tò mò, gợi mở (Inquisitive)\n',
    createdAt: new Date().toISOString(),
    workspaceData: { blocks: { languageVersion: 0, blocks: [{ type: "config_header", x: 20, y: 20, deletable: false, next: { block: { type: "wrapper_persona", deletable: false, inputs: { DO: { block: { type: "persona_science_whiz" } } }, next: { block: { type: "wrapper_tone", deletable: false, inputs: { DO: { block: { type: "tone_inquisitive" } } }, next: { block: { type: "wrapper_theories", deletable: false, inputs: { DO: { block: { type: "theory_cognitive" } } } } } } } } } }] } }
  }
];

export const publishBotToGallery = async (botData) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    let gallery = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    
    const newBot = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...botData
    };
    
    gallery.unshift(newBot);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gallery));
    
    return { success: true, botId: newBot.id };
  } catch (error) {
    console.error("Lỗi khi đăng Bot:", error);
    throw new Error("Không thể đăng Bot lên thư viện.");
  }
};

export const fetchGalleryBots = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    let gallery = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!gallery) {
      gallery = [];
    }
    
    // Đảm bảo tất cả SEED_BOTS đều có mặt trong gallery (đề phòng cập nhật thêm bot mới)
    let updated = false;
    SEED_BOTS.forEach(seedBot => {
      if (!gallery.find(b => b.id === seedBot.id)) {
        gallery.push(seedBot);
        updated = true;
      }
    });

    if (updated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gallery));
    }
    
    return gallery;
  } catch (error) {
    console.error("Lỗi khi tải Thư viện:", error);
    return [];
  }
};
