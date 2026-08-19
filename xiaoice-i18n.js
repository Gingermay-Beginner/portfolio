(() => {
  const translations = new Map([
    ["背景与介入", "Context & Intervention"],
    ["约束与决策", "Constraints & Decision"],
    ["系统全景", "System Overview"],
    ["视觉系统", "Visual System"],
    ["工程化与修正", "Engineering & Correction"],
    ["发布与结果", "Launch & Outcomes"],
    ["设计复盘", "Design Reflection"],
    ["面对当时尚不成熟的故事理解能力和不可规模化的传统动画方案，我将阶段目标从", "Faced with immature story-understanding technology and a traditional animation process that could not scale, I reframed the phase goal from"],
    ["动画片", "full animation"],
    ["重新定义为", "to an"],
    ["可动绘本", "animated storybook"],
    ["，并建立 Story-to-Script、Auto Storyboard 与可复用视觉资产系统，为小冰 C 端 App 持续生产“讲故事”内容。", ", then built Story-to-Script, Auto Storyboard, and a reusable visual asset system to continuously supply Xiaoice’s consumer app with story content."],
    ["动画片路线无法按期、规模化落地", "Full animation could not ship on time or scale"],
    ["模型能力与传统制作方式，都无法同时满足发布期限和持续供给。", "Neither the available models nor the traditional production process could meet the launch deadline and sustain content supply."],
    ["动画片 → 可动绘本", "Full animation → Animated storybook"],
    ["用有限动效、旁白与模块化画面，重新定义阶段成功标准。", "Redefined success around limited motion, narration, and modular scenes."],
    ["Story-to-Script ＋ 可复用视觉系统", "Story-to-Script + Reusable visual system"],
    ["定义故事拆分、规则映射、资产调用与画面组合流程。", "Defined story decomposition, rule mapping, asset retrieval, and scene composition."],
    ["单条生产约 24h → 40min", "Per-story production: ~24h → 40min"],
    ["完整 Template 库建成、规则与资产流程稳定后的效率。", "Measured after the complete template library and asset workflow had stabilized."],
    ["产品重构 · 流程定义 · 系统设计", "Product reframing · Workflow definition · System design"],
    ["主动扩大范围并发起工程合作", "Expanded the scope and initiated engineering collaboration"],
    ["PM ×1 · 我（系统与设计）· 插画师 ×2 · 开发 ×1", "PM ×1 · Me (system & design) · Illustrators ×2 · Engineer ×1"],
    ["01 / 项目背景与我的介入", "01 / Context & My Intervention"],
    ["发布会给出了硬期限，也暴露了不可规模化的生产方式", "The launch created a hard deadline—and exposed a production model that could not scale"],
    ["“小冰讲故事”已经具备将故事文本转为语音的能力。为了进一步吸引儿童用户、增强内容表现力，团队希望在音频基础上加入图像与动画，并将“文本自动生成动画”列为 2019 年发布会能力；我们必须在会前交付真实可运行、可稳定复现的方案。", "Xiaoice Storytelling could already turn story text into speech. To better engage children and enrich the experience, the team wanted to add imagery and motion—and announced text-to-animation as a capability for the 2019 launch. We had to deliver something genuinely runnable and reliably reproducible before the event."],
    ["小冰 C 端 App 用户", "Xiaoice consumer app users"],
    ["用户在 App 内播放“小冰讲故事”内容，消费的是最终成片。", "Users played Xiaoice Storytelling in the app and consumed the finished content."],
    ["内部内容供应系统", "Internal content supply system"],
    ["系统服务 PM、设计和内容生产流程，而非面向 C 端用户的创作工具。", "The system supported PM, design, and content production—not end-user creation."],
    ["故事文本 → 图像 + 动效的可动绘本", "Story text → Animated storybook with imagery and motion"],
    ["输入自然语言故事，输出包含画面、动画、旁白和字幕的可动绘本内容。", "Input a natural-language story; output an animated storybook with scenes, motion, narration, and captions."],
    ["协调插画交付", "Coordinate illustration delivery"],
    ["PM 提供脚本和素材要求；我原本只需要向两位插画师传递需求并确保按时完成。", "The PM supplied scripts and asset requests; my original role was simply to brief two illustrators and ensure on-time delivery."],
    ["重复劳动不断放大", "Repetitive work kept multiplying"],
    ["PM 被脚本撰写占用，插画师持续生产无法复用的一次性素材；开发在负责最终实现的同时，还不得不承担缺少标准的剪辑与大量细碎调整。", "The PM was consumed by scriptwriting, illustrators kept producing one-off assets, and the engineer—while owning implementation—also had to handle unstandardized editing and countless small adjustments."],
    ["主动接手系统定义", "Proactively took ownership of the system"],
    ["我将范围扩大到动画脚本规则、视觉资产系统和端到端流程。", "I expanded my scope to animation-script rules, the visual asset system, and the end-to-end workflow."],
    ["02 / 技术约束与产品决策", "02 / Technical Constraints & Product Decision"],
    ["真正的问题不是怎么生成动画片，而是这个阶段什么才算成功", "The real question was not how to generate full animation, but what success meant at this stage"],
    ["我先判断两条既有路线为什么无法在期限与资源约束内成立，再重新定义用户应该期待的产品形态。", "I first examined why the two existing paths could not work within our time and resource constraints, then redefined the product experience users should expect."],
    ["让 AI 真正理解完整故事", "Have AI truly understand the entire story"],
    ["模型需要理解物理关系、隐藏信息、跨句指代、人物关系和镜头调度，才可能像导演一样生成连续动画。", "A model would need to understand physical relationships, implicit information, cross-sentence references, character relationships, and shot direction to generate continuous animation like a director."],
    ["“带着一包烟”和“带着一只狗”具有完全不同的物理关系", "“Carrying a pack of cigarettes” and “bringing a dog” imply completely different physical relationships"],
    ["“他、她、他们”跨句后容易失去指代", "Pronouns such as “he,” “she,” and “they” easily lose their referents across sentences"],
    ["镜头进入、退出与运动依赖完整世界理解", "Entrances, exits, and camera movement depend on a coherent world model"],
    ["当时无法在发布周期内稳定落地", "Not reliably achievable within the launch cycle"],
    ["沿用传统动画片制作方式", "Continue with traditional animation production"],
    ["人工完成脚本、分镜、素材、动作和镜头能够控制单条质量，但本质上只是扩大制作团队。", "Manually producing scripts, storyboards, assets, actions, and shots could control quality for one story—but only by expanding the production team."],
    ["脚本依赖 PM 个人处理，缺少统一标准", "Scripts depended on the PM’s individual judgment, with no shared standard"],
    ["每条内容定制素材，无法支持批量复用", "Custom assets for every story prevented reuse at scale"],
    ["即使做出一条，也不能证明系统可规模化", "Producing one story would not prove the system could scale"],
    ["可以制作，但无法成为可持续的产品能力", "Feasible as production, but not sustainable as a product capability"],
    ["把阶段目标从“生成动画片”改成“稳定生成可动绘本”", "Reframed the phase goal from “generate full animation” to “reliably generate animated storybooks”"],
    ["降低对连续表演、复杂物理关系和精确镜头调度的期待；用有限动效、旁白、字幕和模块化画面形成完整叙事。成功标准由“像动画片”变成“真实可运行、结果可预期、内容可持续生产”。", "Reduced expectations for continuous performance, complex physical relationships, and precise shot direction. Instead, limited motion, narration, captions, and modular scenes carried a complete narrative. Success shifted from “looks like animation” to “actually runs, produces predictable results, and supports continuous production.”"],
    ["左：依赖逐镜头设计和连续表演的动画片；右：以独立画面和有限动效连接叙事的可动绘本。", "Left: full animation built through shot-by-shot design and continuous performance. Right: an animated storybook that connects independent scenes with limited motion."],
    ["查看两种产品形态的逐句画面对比 ↓", "View a sentence-by-sentence comparison ↓"],
    ["收起对比 ↑", "Hide comparison ↑"],
    ["先实现“主体图像 + 动画”", "Start with “subject image + motion”"],
    ["主动缩小视觉语义范围，先证明文字可以稳定生成会动的画面。", "Deliberately narrowed the visual-semantic scope to first prove that text could reliably generate a moving scene."],
    ["查看原图 ↗", "View original ↗"],
    ["每个被选中可视化的句子单元 → 一个对应画面", "Each sentence unit selected for visualization → one corresponding scene"],
    ["画面必须有明确主体，并匹配该句的动作或状态；相邻画面可以继续使用同一角色。", "Each scene must have a clear subject and match the sentence’s action or state; adjacent scenes may reuse the same character."],
    ["画面更新频率：至少每 2 句话切换一次", "Scene refresh rate: change at least every two sentences"],
    ["连续两句话可以共用一个画面；进入第 3 句话时必须切换。", "Two consecutive sentences may share one scene; the third must introduce a new scene."],
    ["03 / 我定义的系统全景", "03 / The System I Defined"],
    ["我把分散在 PM、设计和视频制作中的工作，重新组织成一条可执行链路", "I reorganized work scattered across PM, design, and video production into one executable pipeline"],
    ["这里先明确每个模块的输入、输出和责任边界；后续两节分别展开语言规则与视觉系统。", "This overview clarifies each module’s input, output, and ownership. The next two sections unpack the language rules and visual system."],
    ["待生产的故事文本；视觉阶段还会调用可复用资产库。", "Story text awaiting production; the visual stage also accesses the reusable asset library."],
    ["拆分、归一、筛选；输出 Scene Context、Subject 与 Action / State。", "Decompose, normalize, and filter; output Scene Context, Subject, and Action / State."],
    ["匹配 Subject asset + Animation type，并补全 Background + Shot Design。", "Match Subject asset + Animation type, then complete Background + Shot Design."],
    ["组合视觉资产、动画、字幕与音频。", "Compose visual assets, motion, captions, and audio."],
    ["包含画面、动画、旁白和字幕。", "Contains scenes, motion, narration, and captions."],
    ["定义问题、产品形态、流程与规则", "Defined the problem, product format, workflow, and rules"],
    ["我负责 Story-to-Script、Auto Storyboard、视觉资产结构和各模块之间的输入输出。", "I owned Story-to-Script, Auto Storyboard, the visual asset structure, and the interfaces between modules."],
    ["把规则编排成可运行系统", "Turned the rules into a working system"],
    ["开发伙伴实现脚本解析、资产调用、合成与 TTS 接入；我们共同用真实故事处理规则例外。", "My engineering partner implemented script parsing, asset retrieval, composition, and TTS integration. Together, we used real stories to resolve rule exceptions."],
    ["故事被人工逐层翻译为分镜、素材和视频，每一步都包含大量一次性判断。", "Stories were manually translated into storyboards, assets, and video, with one-off judgment at every step."],
    ["系统读取结构化 Script 并调用可复用资产；团队转为补充规则和素材库。", "The system read structured Scripts and retrieved reusable assets; the team shifted to extending rules and the asset library."],
    ["我没有让系统理解完整故事，而是把它约束成可处理的句法单元", "I did not ask the system to understand an entire story—I constrained it to processable syntactic units"],
    ["关键发现是：大多数需要处理的表达可以归一为动作或状态两类基础结构。于是问题从“理解完整世界”变成“拆分、归一、筛选和输出”。", "The key insight was that most expressions could be normalized into two basic structures: actions or states. The problem shifted from “understand the whole world” to “decompose, normalize, filter, and output.”"],
    ["自然语言 → 系统可执行 Script", "Natural language → System-executable Script"],
    ["Script 只定义“发生什么”；构图、镜头、位置和具体素材由下一阶段的 Auto Storyboard 决定。", "The Script defines only what happens; composition, shot size, position, and specific assets are decided by Auto Storyboard in the next stage."],
    ["拆成句子单元", "Decompose into sentence units"],
    ["按照叙事顺序，把完整故事拆成能够分别处理的原子单元。", "Break the full story into atomic units that can be processed independently while preserving narrative order."],
    ["归一为有限句式", "Normalize into a finite set of sentence patterns"],
    ["将复杂表达转换为动作或状态结构，并补全必要的省略主语。", "Convert complex expressions into action or state structures and restore omitted subjects when needed."],
    ["决定是否形成画面", "Decide whether to generate a scene"],
    ["不是每句话都值得单独生成画面；保留叙事重点，并省略无法稳定表达或信息价值较低的单元。", "Not every sentence needs its own scene. Keep narrative priorities and omit units that cannot be expressed reliably or add little visual value."],
    ["输出动画脚本单元", "Output animation-script units"],
    ["每个保留单元输出系统稳定执行所需的核心字段。", "Each retained unit outputs the core fields required for reliable execution."],
    ["Scene Context 可继承；MVP 不为宾语生成独立图像。", "Scene Context can be inherited; the MVP does not generate a separate image for the object."],
    ["我编写的句法与脚本规则", "The syntax and scripting rules I authored"],
    ["复杂叙事的规则拆解", "Rule Decomposition for Complex Narratives"],
    ["判断哪些信息进入主体、动作 / 状态和场景上下文。", "Determine which information becomes the Subject, Action / State, and Scene Context."],
    ["打开完整规则文档 ↗", "Open full rule document ↗"],
    ["并列句转换为原子动作", "Convert compound sentences into atomic actions"],
    ["复杂句被规范成“主体 + 动作 / 状态”的可处理单元。", "Normalize complex sentences into processable “Subject + Action / State” units."],
    ["Script 定义发生什么；Auto Storyboard 决定它如何成为画面", "Script defines what happens; Auto Storyboard decides how it becomes a scene"],
    ["系统可执行的叙事单元", "System-executable narrative unit"],
    ["完成文本拆分、句式归一和可视化筛选，输出稳定的语义字段。", "Completes text decomposition, sentence normalization, and visualization filtering to output stable semantic fields."],
    ["完整的画面执行单元", "Complete scene-execution unit"],
    ["接收 Script 字段，匹配视觉资产，并补全 Script 未定义的画面决策。", "Receives Script fields, matches visual assets, and fills in visual decisions not defined by the Script."],
    ["05 / Auto Storyboard 与视觉系统", "05 / Auto Storyboard & Visual System"],
    ["我把一次性插画重构为三类资产库和一套画面规则", "I transformed one-off illustration into three asset libraries and a scene-rule system"],
    ["脚本自动化之后，如果视觉素材仍按每条故事定制，成本只是被转移给插画师。因此我重新定义素材的生产单位、分类方式和合成规则。", "If visual assets were still custom-made for every story, script automation would only shift the cost to illustrators. I therefore redefined the unit of production, asset taxonomy, and composition rules."],
    ["主体、动画与背景资产保持独立，构图与镜头作为规则层控制它们如何进入最终画面。", "Subject, animation, and background assets remain independent; Shot Design acts as a rule layer that controls how they enter the final scene."],
    ["三类可独立扩展的资产库", "Three independently extensible asset libraries"],
    ["插画师不再为每条故事制作完整成片，而是持续补充能够跨故事调用的视觉资产。", "Illustrators no longer produced a full set for every story; they expanded reusable visual assets that could be retrieved across stories."],
    ["一套构图与镜头模板", "A Shot Design template system"],
    ["用人物数量、朝向、尺寸、位置、景别和图层关系，约束资产如何组合成稳定画面。", "Character count, direction, scale, position, shot size, and layer relationships constrain how assets combine into stable scenes."],
    ["Item / Object 可以作为素材库扩展能力存在，但首个 MVP 不要求为句法中的每个宾语生成独立图像。", "Item / Object remains an extensible asset capability, but the first MVP does not require a separate image for every grammatical object."],
    ["资产、模板与命名检索", "Assets, templates, and naming conventions"],
    ["点击查看每一层的变量结构和原始设计证据。", "Open each layer to inspect its variable structure and original design evidence."],
    ["主体组合资产", "Composable subject assets"],
    ["将人物和拟人动物拆成可组合、可继续扩展的变量。", "Decompose human and anthropomorphic-animal characters into composable, extensible variables."],
    ["查看 10 张设计原稿 ↗", "View 10 original design slides ↗"],
    ["Action / State 与动画变体", "Action / State & Animation Variants"],
    ["将语言中的动作或状态映射为可调用的动画资产。", "Map actions or states in language to retrievable animation assets."],
    ["查看 6 张设计原稿与动态演示 ↗", "View 6 design slides and motion demo ↗"],
    ["背景与空间资产", "Background & Spatial Assets"],
    ["从抽象空间占位到具体场景，背景可跨故事复用。", "From abstract spatial placeholders to concrete scenes, backgrounds can be reused across stories."],
    ["查看 4 张设计原稿 ↗", "View 4 original design slides ↗"],
    ["构图与镜头模板", "Shot Design Templates"],
    ["用规则控制不同资产如何稳定进入同一画面。", "Use rules to control how different assets reliably enter the same scene."],
    ["查看 7 张设计原稿 ↗", "View 7 original design slides ↗"],
    ["素材分类、命名与检索", "Asset Taxonomy, Naming & Retrieval"],
    ["让 Script 解析结果可以转化为检索条件，也让新增资产直接进入系统。", "Turn parsed Script results into retrieval criteria and allow new assets to enter the system directly."],
    ["查看原始表格 ↗", "View original table ↗"],
    ["06 / 工程化、异常与人工修正", "06 / Engineering, Exceptions & Human Correction"],
    ["我主动找到开发伙伴，用真实故事把设计规则变成系统", "I initiated an engineering partnership and used real stories to turn design rules into a system"],
    ["规则只有被系统执行、被例外反复检验，才会成为生产能力。自动化没有覆盖的内容则进入半人工或人工处理，而不是假装系统可以理解一切。", "Rules become a production capability only after the system executes them and exceptions repeatedly test them. Anything outside automation enters a semi-manual or manual path rather than pretending the system understands everything."],
    ["定义产品、流程与规则", "Defined the product, workflow, and rules"],
    ["提出可动绘本形态，设计 Story-to-Script、Auto Storyboard、视觉资产结构和验证样例。", "Proposed the animated storybook format and designed Story-to-Script, Auto Storyboard, the visual asset structure, and validation examples."],
    ["把规则编排成可运行逻辑", "Implemented the rules as executable logic"],
    ["实现脚本解析、资产调用、视频合成与 TTS 接入，并与我一起处理规则无法覆盖的例外。", "Implemented script parsing, asset retrieval, video composition, and TTS integration, and worked with me on exceptions the rules could not cover."],
    ["规则说明", "Rule definition"],
    ["开发实现", "Engineering implementation"],
    ["真实故事验证", "Validate with real stories"],
    ["发现例外", "Identify exceptions"],
    ["更新规则或素材库", "Update rules or asset library"],
    ["自动化覆盖之外，保留人工路径", "Preserve a human path beyond automation"],
    ["系统价值不是消灭所有人工，而是让重复部分自动化，让例外有明确去处。", "The system’s value is not eliminating all human work—it is automating repetition and giving exceptions a clear path."],
    ["查看案例表格 ↗", "View case matrix ↗"],
    ["为调试和修正保留可编辑参数", "Keep parameters editable for debugging and correction"],
    ["该平台由开发伙伴自行搭建，不是我的 UI 设计交付；它证明构图、图层、字幕和动画规则已被工程化为可调参数。", "This platform was independently built by my engineering partner, not delivered as my UI design. It demonstrates that composition, layers, captions, and animation rules were engineered into adjustable parameters."],
    ["07 / 发布与业务结果", "07 / Launch & Business Outcomes"],
    ["从发布会能力，发展为可以响应真实业务节奏的生产系统", "From a launch capability to a production system that could respond to real business cadence"],
    ["可动绘本先解决了“能否按时落地”，脚本规则、资产库和工程化流程进一步降低了向 C 端 App 持续供应故事内容的成本。", "The animated storybook first solved whether we could ship on time. Script rules, asset libraries, and the engineered workflow then reduced the cost of continuously supplying stories to the consumer app."],
    ["交付可运行产品形态", "Delivered a working product format"],
    ["用有限动效和受约束的语义范围，证明故事可以稳定生成动态内容。", "Proved that stories could reliably generate dynamic content using limited motion and a constrained semantic scope."],
    ["补全规则、资产和工具", "Expanded rules, assets, and tools"],
    ["将一次性交付继续发展为可重复使用的内容生产能力。", "Developed a one-time launch deliverable into a reusable content-production capability."],
    ["响应疫情热点内容", "Responded to pandemic-related content needs"],
    ["系统被用于更快完成与当天业务节奏相关的内容生产。", "The system was used to produce time-sensitive content at the pace of daily business needs."],
    ["以下 97%、8× 和 3h 三项效率数据，均对应完整 Template 库建成、规则与资产生产流程稳定后的系统阶段。", "The 97%, 8×, and 3h efficiency figures below all refer to the stage after the full template library and rule-and-asset workflow had stabilized."],
    ["正式发布内容", "Stories launched"],
    ["据项目回忆，2019 年正式发布阶段上线约 30–40 条故事内容；准确数量待项目记录确认。", "Based on project recollection, approximately 30–40 stories launched in 2019; the exact count awaits confirmation from project records."],
    ["视频生产时间节省", "Video production time saved"],
    ["项目阶段记录：从约 24 小时缩短至 40 分钟，自动完成主体、动作、背景、字幕与音频组合。", "Project-stage records: reduced from about 24 hours to 40 minutes by automating the combination of subjects, actions, backgrounds, captions, and audio."],
    ["素材库补充提速", "Asset-library expansion speed"],
    ["从约 32 小时缩短至 4 小时；团队集中补充可复用资产，而不是重新制作完整内容。", "Reduced from about 32 hours to 4 hours; the team focused on adding reusable assets instead of recreating complete content."],
    ["热点首批内容", "First time-sensitive content batch"],
    ["疫情热点期间，项目记录显示首批内容约 3 小时完成，支持当天发布。", "During the pandemic news cycle, project records show the first content batch was completed in about three hours, enabling same-day release."],
    ["效率数据来自项目阶段记录。本案例仅呈现可公开讨论的项目框架与结果；精确发布会阶段、内容规模与业务渠道待补充确认。", "Efficiency data comes from project-stage records. This case study presents only the project framework and outcomes that can be discussed publicly; exact launch phases, content volume, and distribution channels remain to be confirmed."],
    ["08 / 设计原则与复盘", "08 / Design Principles & Reflection"],
    ["这次项目让我形成了三条系统设计原则", "This project shaped three system-design principles"],
    ["产品形态、内容规则与人工修正必须一起定义，自动化才能从发布会能力发展为稳定的生产系统。", "Product format, content rules, and human correction must be defined together for automation to evolve from a launch capability into a stable production system."],
    ["先定义阶段成功标准", "Define phase-specific success first"],
    ["在能力与期限受限时，先明确什么能够按期稳定交付，避免用理想终局判断首版产品。", "When capabilities and time are constrained, first define what can be delivered reliably on schedule instead of judging the first version against an ideal end state."],
    ["把复杂叙事拆成稳定单元", "Break complex narratives into stable units"],
    ["将故事理解问题转成句式归一、可视化筛选和资产匹配，让系统可以逐步实现与验证。", "Turn story understanding into sentence normalization, visualization filtering, and asset matching so the system can be implemented and validated incrementally."],
    ["为自动化保留人工修正", "Design human correction into automation"],
    ["规则处理高频场景，人工编辑器承接语义歧义和例外，兼顾生产效率与内容质量。", "Rules handle high-frequency cases; a human editor resolves semantic ambiguity and exceptions, balancing production efficiency with content quality."],
    ["这次项目最终留下的，不只是一批可动绘本，而是一套能够持续生产内容的系统。", "The project ultimately produced more than a set of animated storybooks—it created a system that could continuously produce content."],

    ["项目中从动画片制作目标到可动绘本产品形态的对比", "Comparison of the original full-animation goal and the animated-storybook product format"],
    ["同一故事在连续场景动画与可动绘本两种生产逻辑下的画面差异", "Visual difference between continuous animation and animated-storybook production for the same story"],
    ["MVP：主体图像 + 动画", "MVP: Subject image + motion"],
    ["语义分析可以保留宾语，但首版不为宾语生成独立图像，只将主语映射为主体、谓语或表语结构映射为动画。", "Semantic analysis may retain the object, but the first version does not generate a separate image for it. Only the subject maps to the visual subject, while the predicate or predicative structure maps to motion."],
    ["从故事句式到 Script 与视觉画面的 MVP 映射规则", "MVP mapping from story syntax to Script fields and visual scenes"],
    ["系统改造前的人工串行流程", "Manual sequential workflow before the system redesign"],
    ["系统改造后的自动化流程", "Automated workflow after the system redesign"],
    ["完整的 Text-to-Script 原理、句法拆分方法和规则原稿。", "Complete Text-to-Script principles, syntax-decomposition methods, and original rule documentation."],
    ["自然语言故事被拆解为场景、主体和动作字段", "Natural-language stories decomposed into scene, subject, and action fields"],
    ["将“小红笑了，并吃了一颗糖”转换为两个主谓单元，补全第二句主语，使系统识别两个独立动作。", "Convert “Xiaohong smiled and ate a piece of candy” into two subject-predicate units, restoring the second subject so the system recognizes two independent actions."],
    ["并列句被拆成两个原子动作", "A compound sentence decomposed into two atomic actions"],
    ["Script 字段与 Auto Storyboard 画面字段的映射", "Mapping Script fields to Auto Storyboard visual fields"],
    ["预制素材库与画面合成系统", "Prefabricated asset library and scene-composition system"],
    ["从模块化组合规则、最终生产资产到前期视觉方向探索，共 10 张设计原稿。", "Ten original design slides covering modular composition rules, final production assets, and early visual direction exploration."],
    ["主体组合资产设计", "Composable subject asset design"],
    ["从通用动作与状态分类、动画参数，到高频动作定制与动态演示，共 6 张设计原稿与 1 段视频。", "Six original design slides and one video covering general action/state categories, animation parameters, high-frequency custom actions, and a motion demo."],
    ["动作、状态与动画变体设计", "Action, state, and animation-variant design"],
    ["从空间与地平线规则到完整生产背景，共 4 张设计原稿；背景由 Scene Context 和 Auto Storyboard 规则进行选择。", "Four original design slides covering spatial and horizon rules through final production backgrounds. Backgrounds are selected through Scene Context and Auto Storyboard rules."],
    ["背景与空间资产设计", "Background and spatial asset design"],
    ["从景别、网格与主体布局，到单人及双人对话取景，共 7 张 Shot Design 规则原稿。", "Seven original Shot Design slides covering shot size, grids, subject layout, and framing for one- and two-character dialogue."],
    ["构图与镜头模板设计", "Shot Design template system"],
    ["类型、语义分类、属性和变体编号共同组成可被设计团队与系统理解的素材 ID。", "Type, semantic category, attributes, and variant number combine into an asset ID understood by both the design team and the system."],
    ["素材分类、命名与检索规则", "Asset taxonomy, naming, and retrieval rules"],
    ["自动化覆盖与人工边界", "Automation Coverage & Human Boundary"],
    ["项目用实际语料区分 Fully automatic processing、Automated after rule extension、Semi-manual processing 和 Full manual processing 四类内容，从而明确系统能力边界。", "Real story data was classified as Fully automatic, Automated after rule extension, Semi-manual, or Full manual processing to make the system boundary explicit."],
    ["67 个脚本单元的自动化覆盖率：59.7% 全自动，16.4% 规则扩展后自动化，4.5% 半人工，19.4% 全人工", "Automation coverage across 67 script units: 59.7% fully automatic, 16.4% automated after rule extension, 4.5% semi-manual, and 19.4% fully manual"],
    ["开发伙伴搭建的内部调整平台", "Internal adjustment platform built by the engineering partner"],
    ["小冰讲故事疫情版可动绘本视频", "Xiaoice Storytelling pandemic-edition animated storybook"],
    ["播放小冰讲故事疫情版视频", "Play the Xiaoice Storytelling pandemic-edition video"],
    ["关闭", "Close"],
    ["图片页码", "Gallery pages"],
    ["项目原始证据", "Original project evidence"],
    ["动画资产", "animation asset"],
    ["动态演示", " motion demo"]
  ]);

  const textRecords = [];
  const attributeRecords = [];
  const translatedAttributes = ["alt", "aria-label", "data-title", "data-caption"];

  const replaceTrimmedText = (source, value) => {
    const key = source.trim();
    const start = source.indexOf(key);
    return `${source.slice(0, start)}${value}${source.slice(start + key.length)}`;
  };

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    const key = node.nodeValue.trim();
    if (!translations.has(key)) continue;
    textRecords.push({
      node,
      zh: node.nodeValue,
      en: replaceTrimmedText(node.nodeValue, translations.get(key))
    });
  }

  document.querySelectorAll("*").forEach(element => {
    translatedAttributes.forEach(name => {
      if (!element.hasAttribute(name)) return;
      const value = element.getAttribute(name);
      if (!translations.has(value)) return;
      attributeRecords.push({ element, name, zh: value, en: translations.get(value) });
    });
  });

  const description = document.querySelector('meta[name="description"]');
  const descriptionZh = description?.getAttribute("content") || "";
  const descriptionEn = translations.get(descriptionZh) || "Microsoft Xiaoice Animated Storybook case study.";
  let currentLanguage = "zh";

  const applyLanguage = (language, persist = true) => {
    currentLanguage = language === "en" ? "en" : "zh";
    document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
    textRecords.forEach(record => { record.node.nodeValue = record[currentLanguage]; });
    attributeRecords.forEach(record => { record.element.setAttribute(record.name, record[currentLanguage]); });
    if (description) description.setAttribute("content", currentLanguage === "en" ? descriptionEn : descriptionZh);
    document.querySelectorAll("[data-language]").forEach(button => {
      const active = button.dataset.language === currentLanguage;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const dialog = document.querySelector("#lightbox");
    if (dialog?.open) dialog.close();
    if (persist) {
      try { localStorage.setItem("xiaoice-language", currentLanguage); } catch (_) {}
    }
  };

  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  let initialLanguage = "zh";
  try {
    if (localStorage.getItem("xiaoice-language") === "en") initialLanguage = "en";
  } catch (_) {}

  window.xiaoiceI18n = {
    applyLanguage,
    get language() { return currentLanguage; },
    t(value) { return currentLanguage === "en" ? (translations.get(value) || value) : value; }
  };
  applyLanguage(initialLanguage, false);
})();
