/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : admin_hr

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2018-07-23 20:25:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` varchar(13) DEFAULT NULL,
  `pass` varchar(8) DEFAULT NULL,
  `pname` varchar(8) DEFAULT NULL,
  `fname` varchar(100) DEFAULT NULL,
  `lname` varchar(100) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', '3909900753191', '3191!@#', 'นาย', 'ชญานนท์', 'สุวรรณชัย', 'Y');

-- ----------------------------
-- Table structure for ampur
-- ----------------------------
DROP TABLE IF EXISTS `ampur`;
CREATE TABLE `ampur` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `ampur_code` varchar(4) DEFAULT NULL,
  `ampur_name` varchar(200) DEFAULT NULL,
  `province_code` varchar(2) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=927 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ampur
-- ----------------------------
INSERT INTO `ampur` VALUES ('1', '0101', 'เมืองกระบี่', '01', 'Y');
INSERT INTO `ampur` VALUES ('2', '0102', 'เกาะลันตา', '01', 'Y');
INSERT INTO `ampur` VALUES ('3', '0103', 'เขาพนม', '01', 'Y');
INSERT INTO `ampur` VALUES ('4', '0104', 'คลองท่อม', '01', 'Y');
INSERT INTO `ampur` VALUES ('5', '0105', 'ปลายพระยา', '01', 'Y');
INSERT INTO `ampur` VALUES ('6', '0106', 'ลำทับ', '01', 'Y');
INSERT INTO `ampur` VALUES ('7', '0107', 'เหนือคลอง', '01', 'Y');
INSERT INTO `ampur` VALUES ('8', '0108', 'อ่าวลึก', '01', 'Y');
INSERT INTO `ampur` VALUES ('9', '0201', 'คลองสาน', '02', 'Y');
INSERT INTO `ampur` VALUES ('10', '0202', 'คลองเตย', '02', 'Y');
INSERT INTO `ampur` VALUES ('11', '0203', 'จอมทอง', '02', 'Y');
INSERT INTO `ampur` VALUES ('12', '0204', 'จตุจักร', '02', 'Y');
INSERT INTO `ampur` VALUES ('13', '0205', 'ดุสิต', '02', 'Y');
INSERT INTO `ampur` VALUES ('14', '0206', 'ดอนเมือง', '02', 'Y');
INSERT INTO `ampur` VALUES ('15', '0207', 'ตลิ่งชัน', '02', 'Y');
INSERT INTO `ampur` VALUES ('16', '0208', 'ธนบุรี', '02', 'Y');
INSERT INTO `ampur` VALUES ('17', '0209', 'บางกอกน้อย', '02', 'Y');
INSERT INTO `ampur` VALUES ('18', '0210', 'บางกอกใหญ่', '02', 'Y');
INSERT INTO `ampur` VALUES ('19', '0211', 'บางกะปิ', '02', 'Y');
INSERT INTO `ampur` VALUES ('20', '0212', 'บางขุนเทียน', '02', 'Y');
INSERT INTO `ampur` VALUES ('21', '0213', 'บางเขน', '02', 'Y');
INSERT INTO `ampur` VALUES ('22', '0214', 'บางคอแหลม', '02', 'Y');
INSERT INTO `ampur` VALUES ('23', '0215', 'บางซื่อ', '02', 'Y');
INSERT INTO `ampur` VALUES ('24', '0216', 'บางพลัด', '02', 'Y');
INSERT INTO `ampur` VALUES ('25', '0217', 'บางรัก', '02', 'Y');
INSERT INTO `ampur` VALUES ('26', '0218', 'บึงกุ่ม', '02', 'Y');
INSERT INTO `ampur` VALUES ('27', '0219', 'ประเวศ', '02', 'Y');
INSERT INTO `ampur` VALUES ('28', '0220', 'ปทุมวัน', '02', 'Y');
INSERT INTO `ampur` VALUES ('29', '0221', 'ป้อมปราบศัตรูพ่าย', '02', 'Y');
INSERT INTO `ampur` VALUES ('30', '0222', 'พญาไท', '02', 'Y');
INSERT INTO `ampur` VALUES ('31', '0223', 'พระโขนง', '02', 'Y');
INSERT INTO `ampur` VALUES ('32', '0224', 'พระนคร', '02', 'Y');
INSERT INTO `ampur` VALUES ('33', '0225', 'ภาษีเจริญ', '02', 'Y');
INSERT INTO `ampur` VALUES ('34', '0226', 'มีนบุรี', '02', 'Y');
INSERT INTO `ampur` VALUES ('35', '0227', 'ยานนาวา', '02', 'Y');
INSERT INTO `ampur` VALUES ('36', '0228', 'ราชเทวี', '02', 'Y');
INSERT INTO `ampur` VALUES ('37', '0229', 'ราษฎร์บูรณะ', '02', 'Y');
INSERT INTO `ampur` VALUES ('38', '0230', 'ลาดกระบัง', '02', 'Y');
INSERT INTO `ampur` VALUES ('39', '0231', 'ลาดพร้าว', '02', 'Y');
INSERT INTO `ampur` VALUES ('40', '0232', 'สาทร', '02', 'Y');
INSERT INTO `ampur` VALUES ('41', '0233', 'สัมพันธวงศ์', '02', 'Y');
INSERT INTO `ampur` VALUES ('42', '0234', 'หนองแขม', '02', 'Y');
INSERT INTO `ampur` VALUES ('43', '0235', 'หนองจอก', '02', 'Y');
INSERT INTO `ampur` VALUES ('44', '0236', 'ห้วยขวาง', '02', 'Y');
INSERT INTO `ampur` VALUES ('45', '0237', 'สวนหลวง', '02', 'Y');
INSERT INTO `ampur` VALUES ('46', '0238', 'ดินแดง', '02', 'Y');
INSERT INTO `ampur` VALUES ('47', '0239', 'หลักสี่', '02', 'Y');
INSERT INTO `ampur` VALUES ('48', '0240', 'สายไหม', '02', 'Y');
INSERT INTO `ampur` VALUES ('49', '0241', 'คันนายาว', '02', 'Y');
INSERT INTO `ampur` VALUES ('50', '0242', 'สะพานสูง', '02', 'Y');
INSERT INTO `ampur` VALUES ('51', '0243', 'วังทองหลาง', '02', 'Y');
INSERT INTO `ampur` VALUES ('52', '0244', 'คลองสามวา', '02', 'Y');
INSERT INTO `ampur` VALUES ('53', '0245', 'วัฒนา', '02', 'Y');
INSERT INTO `ampur` VALUES ('54', '0246', 'บางนา', '02', 'Y');
INSERT INTO `ampur` VALUES ('55', '0247', 'ทวีวัฒนา', '02', 'Y');
INSERT INTO `ampur` VALUES ('56', '0248', 'บางแค', '02', 'Y');
INSERT INTO `ampur` VALUES ('57', '0249', 'ทุ่งครุ', '02', 'Y');
INSERT INTO `ampur` VALUES ('58', '0250', 'บางบอน', '02', 'Y');
INSERT INTO `ampur` VALUES ('59', '0301', 'เมืองกาญจนบุรี', '03', 'Y');
INSERT INTO `ampur` VALUES ('60', '0302', 'ด่านมะขามเตี้ย', '03', 'Y');
INSERT INTO `ampur` VALUES ('61', '0303', 'ทองผาภูมิ', '03', 'Y');
INSERT INTO `ampur` VALUES ('62', '0304', 'ท่าม่วง', '03', 'Y');
INSERT INTO `ampur` VALUES ('63', '0305', 'ท่ามะกา', '03', 'Y');
INSERT INTO `ampur` VALUES ('64', '0306', 'ไทรโยค', '03', 'Y');
INSERT INTO `ampur` VALUES ('65', '0307', 'บ่อพลอย', '03', 'Y');
INSERT INTO `ampur` VALUES ('66', '0308', 'พนมทวน', '03', 'Y');
INSERT INTO `ampur` VALUES ('67', '0309', 'เลาขวัญ', '03', 'Y');
INSERT INTO `ampur` VALUES ('68', '0310', 'ศรีสวัสดิ์', '03', 'Y');
INSERT INTO `ampur` VALUES ('69', '0311', 'สังขละบุรี', '03', 'Y');
INSERT INTO `ampur` VALUES ('70', '0312', 'หนองปรือ', '03', 'Y');
INSERT INTO `ampur` VALUES ('71', '0313', 'ห้วยกระเจา', '03', 'Y');
INSERT INTO `ampur` VALUES ('72', '0401', 'เมืองกาฬสินธุ์', '04', 'Y');
INSERT INTO `ampur` VALUES ('73', '0402', 'กมลาไสย', '04', 'Y');
INSERT INTO `ampur` VALUES ('74', '0403', 'กุฉินารายณ์', '04', 'Y');
INSERT INTO `ampur` VALUES ('75', '0404', 'เขาวง', '04', 'Y');
INSERT INTO `ampur` VALUES ('76', '0405', 'คำม่วง', '04', 'Y');
INSERT INTO `ampur` VALUES ('77', '0406', 'ท่าคันโท', '04', 'Y');
INSERT INTO `ampur` VALUES ('78', '0407', 'นามน', '04', 'Y');
INSERT INTO `ampur` VALUES ('79', '0408', 'ยางตลาด', '04', 'Y');
INSERT INTO `ampur` VALUES ('80', '0409', 'ร่องคำ', '04', 'Y');
INSERT INTO `ampur` VALUES ('81', '0410', 'สมเด็จ', '04', 'Y');
INSERT INTO `ampur` VALUES ('82', '0411', 'สหัสขันธ์', '04', 'Y');
INSERT INTO `ampur` VALUES ('83', '0412', 'หนองกุงศรี', '04', 'Y');
INSERT INTO `ampur` VALUES ('84', '0413', 'ห้วยผึ้ง', '04', 'Y');
INSERT INTO `ampur` VALUES ('85', '0414', 'ห้วยเม็ก', '04', 'Y');
INSERT INTO `ampur` VALUES ('86', '0415', 'นาคู', '04', 'Y');
INSERT INTO `ampur` VALUES ('87', '0416', 'สามชัย', '04', 'Y');
INSERT INTO `ampur` VALUES ('88', '0417', 'ดอนจาน', '04', 'Y');
INSERT INTO `ampur` VALUES ('89', '0418', 'ฆ้องชัย', '04', 'Y');
INSERT INTO `ampur` VALUES ('90', '0501', 'เมืองกำแพงเพชร', '05', 'Y');
INSERT INTO `ampur` VALUES ('91', '0502', 'ขาณุวรลักษบุรี', '05', 'Y');
INSERT INTO `ampur` VALUES ('92', '0503', 'คลองขลุง', '05', 'Y');
INSERT INTO `ampur` VALUES ('93', '0504', 'คลองลาน', '05', 'Y');
INSERT INTO `ampur` VALUES ('94', '0505', 'ทรายทองวัฒนา', '05', 'Y');
INSERT INTO `ampur` VALUES ('95', '0506', 'ไทรงาม', '05', 'Y');
INSERT INTO `ampur` VALUES ('96', '0507', 'ปางศิลาทอง', '05', 'Y');
INSERT INTO `ampur` VALUES ('97', '0508', 'พรานกระต่าย', '05', 'Y');
INSERT INTO `ampur` VALUES ('98', '0509', 'ลานกระบือ', '05', 'Y');
INSERT INTO `ampur` VALUES ('99', '0510', 'บึงสามัคคี', '05', 'Y');
INSERT INTO `ampur` VALUES ('100', '0511', 'โกสัมพีนคร', '05', 'Y');
INSERT INTO `ampur` VALUES ('101', '0601', 'เมืองขอนแก่น', '06', 'Y');
INSERT INTO `ampur` VALUES ('102', '0602', 'กระนวน', '06', 'Y');
INSERT INTO `ampur` VALUES ('103', '0603', 'เขาสวนกวาง', '06', 'Y');
INSERT INTO `ampur` VALUES ('104', '0604', 'โคกโพธิ์ไชย', '06', 'Y');
INSERT INTO `ampur` VALUES ('105', '0605', 'ชำสูง', '06', 'Y');
INSERT INTO `ampur` VALUES ('106', '0606', 'ชนบท', '06', 'Y');
INSERT INTO `ampur` VALUES ('107', '0607', 'ชุมแพ', '06', 'Y');
INSERT INTO `ampur` VALUES ('108', '0608', 'น้ำพอง', '06', 'Y');
INSERT INTO `ampur` VALUES ('109', '0609', 'บ้านไผ่', '06', 'Y');
INSERT INTO `ampur` VALUES ('110', '0610', 'บ้านฝาง', '06', 'Y');
INSERT INTO `ampur` VALUES ('111', '0611', 'เปือยน้อย', '06', 'Y');
INSERT INTO `ampur` VALUES ('112', '0612', 'พล', '06', 'Y');
INSERT INTO `ampur` VALUES ('113', '0613', 'พระยืน', '06', 'Y');
INSERT INTO `ampur` VALUES ('114', '0614', 'ภูเวียง', '06', 'Y');
INSERT INTO `ampur` VALUES ('115', '0615', 'ภูผาม่าน', '06', 'Y');
INSERT INTO `ampur` VALUES ('116', '0616', 'มัญจาคีรี', '06', 'Y');
INSERT INTO `ampur` VALUES ('117', '0617', 'แวงน้อย', '06', 'Y');
INSERT INTO `ampur` VALUES ('118', '0618', 'แวงใหญ่', '06', 'Y');
INSERT INTO `ampur` VALUES ('119', '0619', 'สีชมพู', '06', 'Y');
INSERT INTO `ampur` VALUES ('120', '0620', 'หนองสองห้อง', '06', 'Y');
INSERT INTO `ampur` VALUES ('121', '0621', 'หนองเรือ', '06', 'Y');
INSERT INTO `ampur` VALUES ('122', '0622', 'หนองนาคำ', '06', 'Y');
INSERT INTO `ampur` VALUES ('123', '0623', 'อุบลรัตน์', '06', 'Y');
INSERT INTO `ampur` VALUES ('124', '0624', 'โนนศิลา', '06', 'Y');
INSERT INTO `ampur` VALUES ('125', '0625', 'บ้านแฮด', '06', 'Y');
INSERT INTO `ampur` VALUES ('126', '0701', 'เมืองจันทบุรี', '07', 'Y');
INSERT INTO `ampur` VALUES ('127', '0702', 'แก่งหางแมว', '07', 'Y');
INSERT INTO `ampur` VALUES ('128', '0703', 'ขลุง', '07', 'Y');
INSERT INTO `ampur` VALUES ('129', '0704', 'ท่าใหม่', '07', 'Y');
INSERT INTO `ampur` VALUES ('130', '0705', 'นายายอาม', '07', 'Y');
INSERT INTO `ampur` VALUES ('131', '0706', 'โป่งน้ำร้อน', '07', 'Y');
INSERT INTO `ampur` VALUES ('132', '0707', 'มะขาม', '07', 'Y');
INSERT INTO `ampur` VALUES ('133', '0708', 'สอยดาว', '07', 'Y');
INSERT INTO `ampur` VALUES ('134', '0709', 'แหลมสิงห์', '07', 'Y');
INSERT INTO `ampur` VALUES ('135', '0710', 'เขาคิชฌกูฏ', '07', 'Y');
INSERT INTO `ampur` VALUES ('136', '0801', 'เมืองฉะเชิงเทรา', '08', 'Y');
INSERT INTO `ampur` VALUES ('137', '0802', 'บางคล้า', '08', 'Y');
INSERT INTO `ampur` VALUES ('138', '0803', 'บางน้ำเปรี้ยว', '08', 'Y');
INSERT INTO `ampur` VALUES ('139', '0804', 'บางปะกง', '08', 'Y');
INSERT INTO `ampur` VALUES ('140', '0805', 'บ้านโพธิ์', '08', 'Y');
INSERT INTO `ampur` VALUES ('141', '0806', 'แปลงยาว', '08', 'Y');
INSERT INTO `ampur` VALUES ('142', '0807', 'พนมสารคาม', '08', 'Y');
INSERT INTO `ampur` VALUES ('143', '0808', 'ราชสาส์น', '08', 'Y');
INSERT INTO `ampur` VALUES ('144', '0809', 'สนามชัยเขต', '08', 'Y');
INSERT INTO `ampur` VALUES ('145', '0810', 'ท่าตะเกียบ', '08', 'Y');
INSERT INTO `ampur` VALUES ('146', '0811', 'คลองเขื่อน', '08', 'Y');
INSERT INTO `ampur` VALUES ('147', '0901', 'เมืองชลบุรี', '09', 'Y');
INSERT INTO `ampur` VALUES ('148', '0902', 'เกาะสีชัง', '09', 'Y');
INSERT INTO `ampur` VALUES ('149', '0903', 'บ่อทอง', '09', 'Y');
INSERT INTO `ampur` VALUES ('150', '0904', 'บางละมุง', '09', 'Y');
INSERT INTO `ampur` VALUES ('151', '0905', 'บ้านบึง', '09', 'Y');
INSERT INTO `ampur` VALUES ('152', '0906', 'พานทอง', '09', 'Y');
INSERT INTO `ampur` VALUES ('153', '0907', 'พนัสนิคม', '09', 'Y');
INSERT INTO `ampur` VALUES ('154', '0908', 'ศรีราชา', '09', 'Y');
INSERT INTO `ampur` VALUES ('155', '0909', 'สัตหีบ', '09', 'Y');
INSERT INTO `ampur` VALUES ('156', '0910', 'หนองใหญ่', '09', 'Y');
INSERT INTO `ampur` VALUES ('157', '0911', 'เกาะจันทร์', '09', 'Y');
INSERT INTO `ampur` VALUES ('158', '1001', 'เมืองชัยนาท', '10', 'Y');
INSERT INTO `ampur` VALUES ('159', '1002', 'มโนรมย์', '10', 'Y');
INSERT INTO `ampur` VALUES ('160', '1003', 'วัดสิงห์', '10', 'Y');
INSERT INTO `ampur` VALUES ('161', '1004', 'สรรคบุรี', '10', 'Y');
INSERT INTO `ampur` VALUES ('162', '1005', 'สรรพยา', '10', 'Y');
INSERT INTO `ampur` VALUES ('163', '1006', 'หันคา', '10', 'Y');
INSERT INTO `ampur` VALUES ('164', '1007', 'หนองมะโมง', '10', 'Y');
INSERT INTO `ampur` VALUES ('165', '1008', 'เนินขาม', '10', 'Y');
INSERT INTO `ampur` VALUES ('166', '1101', 'เมืองชัยภูมิ', '11', 'Y');
INSERT INTO `ampur` VALUES ('167', '1102', 'เกษตรสมบูรณ์', '11', 'Y');
INSERT INTO `ampur` VALUES ('168', '1103', 'แก้งคร้อ', '11', 'Y');
INSERT INTO `ampur` VALUES ('169', '1104', 'คอนสวรรค์', '11', 'Y');
INSERT INTO `ampur` VALUES ('170', '1105', 'คอนสาร', '11', 'Y');
INSERT INTO `ampur` VALUES ('171', '1106', 'จัตุรัส', '11', 'Y');
INSERT INTO `ampur` VALUES ('172', '1107', 'เทพสถิต', '11', 'Y');
INSERT INTO `ampur` VALUES ('173', '1108', 'เนินสง่า', '11', 'Y');
INSERT INTO `ampur` VALUES ('174', '1109', 'บ้านเขว้า', '11', 'Y');
INSERT INTO `ampur` VALUES ('175', '1110', 'บ้านแท่น', '11', 'Y');
INSERT INTO `ampur` VALUES ('176', '1111', 'บำเหน็จณรงค์', '11', 'Y');
INSERT INTO `ampur` VALUES ('177', '1112', 'ภูเขียว', '11', 'Y');
INSERT INTO `ampur` VALUES ('178', '1113', 'ภักดีชุมพล', '11', 'Y');
INSERT INTO `ampur` VALUES ('179', '1114', 'หนองบัวแดง', '11', 'Y');
INSERT INTO `ampur` VALUES ('180', '1115', 'หนองบัวระเหว', '11', 'Y');
INSERT INTO `ampur` VALUES ('181', '1116', 'ซับใหญ่', '11', 'Y');
INSERT INTO `ampur` VALUES ('182', '1201', 'เมืองชุมพร', '12', 'Y');
INSERT INTO `ampur` VALUES ('183', '1202', 'ท่าแซะ', '12', 'Y');
INSERT INTO `ampur` VALUES ('184', '1203', 'ทุ่งตะโก', '12', 'Y');
INSERT INTO `ampur` VALUES ('185', '1204', 'ปะทิว', '12', 'Y');
INSERT INTO `ampur` VALUES ('186', '1205', 'พะโต๊ะ', '12', 'Y');
INSERT INTO `ampur` VALUES ('187', '1206', 'ละแม', '12', 'Y');
INSERT INTO `ampur` VALUES ('188', '1207', 'สวี', '12', 'Y');
INSERT INTO `ampur` VALUES ('189', '1208', 'หลังสวน', '12', 'Y');
INSERT INTO `ampur` VALUES ('190', '1301', 'เมืองเชียงราย', '13', 'Y');
INSERT INTO `ampur` VALUES ('191', '1302', 'ขุนตาล', '13', 'Y');
INSERT INTO `ampur` VALUES ('192', '1303', 'เชียงของ', '13', 'Y');
INSERT INTO `ampur` VALUES ('193', '1304', 'เชียงแสน', '13', 'Y');
INSERT INTO `ampur` VALUES ('194', '1305', 'เทิง', '13', 'Y');
INSERT INTO `ampur` VALUES ('195', '1306', 'ป่าแดด', '13', 'Y');
INSERT INTO `ampur` VALUES ('196', '1307', 'พาน', '13', 'Y');
INSERT INTO `ampur` VALUES ('197', '1308', 'แม่จัน', '13', 'Y');
INSERT INTO `ampur` VALUES ('198', '1309', 'แม่ฟ้าหลวง', '13', 'Y');
INSERT INTO `ampur` VALUES ('199', '1310', 'แม่สรวย', '13', 'Y');
INSERT INTO `ampur` VALUES ('200', '1311', 'แม่สาย', '13', 'Y');
INSERT INTO `ampur` VALUES ('201', '1312', 'เวียงแก่น', '13', 'Y');
INSERT INTO `ampur` VALUES ('202', '1313', 'เวียงชัย', '13', 'Y');
INSERT INTO `ampur` VALUES ('203', '1314', 'เวียงป่าเป้า', '13', 'Y');
INSERT INTO `ampur` VALUES ('204', '1315', 'พญาเม็งราย', '13', 'Y');
INSERT INTO `ampur` VALUES ('205', '1316', 'แม่ลาว', '13', 'Y');
INSERT INTO `ampur` VALUES ('206', '1317', 'ดอยหลวง', '13', 'Y');
INSERT INTO `ampur` VALUES ('207', '1318', 'เวียงเชียงรุ้ง', '13', 'Y');
INSERT INTO `ampur` VALUES ('208', '1401', 'เมืองเชียงใหม่', '14', 'Y');
INSERT INTO `ampur` VALUES ('209', '1402', 'จอมทอง', '14', 'Y');
INSERT INTO `ampur` VALUES ('210', '1403', 'เชียงดาว', '14', 'Y');
INSERT INTO `ampur` VALUES ('211', '1404', 'ไชยปราการ', '14', 'Y');
INSERT INTO `ampur` VALUES ('212', '1405', 'ดอยเต่า', '14', 'Y');
INSERT INTO `ampur` VALUES ('213', '1406', 'ดอยหล่อ', '14', 'Y');
INSERT INTO `ampur` VALUES ('214', '1407', 'ดอยสะเก็ด', '14', 'Y');
INSERT INTO `ampur` VALUES ('215', '1408', 'ฝาง', '14', 'Y');
INSERT INTO `ampur` VALUES ('216', '1409', 'พร้าว', '14', 'Y');
INSERT INTO `ampur` VALUES ('217', '1410', 'แม่แจ่ม', '14', 'Y');
INSERT INTO `ampur` VALUES ('218', '1411', 'แม่แตง', '14', 'Y');
INSERT INTO `ampur` VALUES ('219', '1412', 'แม่ริม', '14', 'Y');
INSERT INTO `ampur` VALUES ('220', '1413', 'แม่วาง', '14', 'Y');
INSERT INTO `ampur` VALUES ('221', '1414', 'แม่อาย', '14', 'Y');
INSERT INTO `ampur` VALUES ('222', '1415', 'แม่ออน', '14', 'Y');
INSERT INTO `ampur` VALUES ('223', '1416', 'เวียงแหง', '14', 'Y');
INSERT INTO `ampur` VALUES ('224', '1417', 'สะเมิง', '14', 'Y');
INSERT INTO `ampur` VALUES ('225', '1418', 'สันกำแพง', '14', 'Y');
INSERT INTO `ampur` VALUES ('226', '1419', 'สันทราย', '14', 'Y');
INSERT INTO `ampur` VALUES ('227', '1420', 'สันป่าตอง', '14', 'Y');
INSERT INTO `ampur` VALUES ('228', '1421', 'สารภี', '14', 'Y');
INSERT INTO `ampur` VALUES ('229', '1422', 'หางดง', '14', 'Y');
INSERT INTO `ampur` VALUES ('230', '1423', 'อมก๋อย', '14', 'Y');
INSERT INTO `ampur` VALUES ('231', '1424', 'ฮอด', '14', 'Y');
INSERT INTO `ampur` VALUES ('232', '1501', 'เมืองตรัง', '15', 'Y');
INSERT INTO `ampur` VALUES ('233', '1502', 'กันตัง', '15', 'Y');
INSERT INTO `ampur` VALUES ('234', '1503', 'ปะเหลียน', '15', 'Y');
INSERT INTO `ampur` VALUES ('235', '1504', 'ย่านตาขาว', '15', 'Y');
INSERT INTO `ampur` VALUES ('236', '1505', 'รัษฎา', '15', 'Y');
INSERT INTO `ampur` VALUES ('237', '1506', 'สิเกา', '15', 'Y');
INSERT INTO `ampur` VALUES ('238', '1507', 'ห้วยยอด', '15', 'Y');
INSERT INTO `ampur` VALUES ('239', '1508', 'วังวิเศษ', '15', 'Y');
INSERT INTO `ampur` VALUES ('240', '1509', 'หาดสำราญ', '15', 'Y');
INSERT INTO `ampur` VALUES ('241', '1510', 'นาโยง', '15', 'Y');
INSERT INTO `ampur` VALUES ('242', '1601', 'เมืองตราด', '16', 'Y');
INSERT INTO `ampur` VALUES ('243', '1602', 'เกาะช้าง', '16', 'Y');
INSERT INTO `ampur` VALUES ('244', '1603', 'เขาสมิง', '16', 'Y');
INSERT INTO `ampur` VALUES ('245', '1604', 'คลองใหญ่', '16', 'Y');
INSERT INTO `ampur` VALUES ('246', '1605', 'บ่อไร่', '16', 'Y');
INSERT INTO `ampur` VALUES ('247', '1606', 'แหลมงอบ', '16', 'Y');
INSERT INTO `ampur` VALUES ('248', '1607', 'เกาะกูด', '16', 'Y');
INSERT INTO `ampur` VALUES ('249', '1701', 'เมืองตาก', '17', 'Y');
INSERT INTO `ampur` VALUES ('250', '1702', 'ท่าสองยาง', '17', 'Y');
INSERT INTO `ampur` VALUES ('251', '1703', 'บ้านตาก', '17', 'Y');
INSERT INTO `ampur` VALUES ('252', '1704', 'พบพระ', '17', 'Y');
INSERT INTO `ampur` VALUES ('253', '1705', 'แม่ระมาด', '17', 'Y');
INSERT INTO `ampur` VALUES ('254', '1706', 'แม่สอด', '17', 'Y');
INSERT INTO `ampur` VALUES ('255', '1707', 'สามเงา', '17', 'Y');
INSERT INTO `ampur` VALUES ('256', '1708', 'อุ้มผาง', '17', 'Y');
INSERT INTO `ampur` VALUES ('257', '1709', 'วังเจ้า', '17', 'Y');
INSERT INTO `ampur` VALUES ('258', '1801', 'เมืองนครนายก', '18', 'Y');
INSERT INTO `ampur` VALUES ('259', '1802', 'บ้านนา', '18', 'Y');
INSERT INTO `ampur` VALUES ('260', '1803', 'ปากพลี', '18', 'Y');
INSERT INTO `ampur` VALUES ('261', '1804', 'องครักษ์', '18', 'Y');
INSERT INTO `ampur` VALUES ('262', '1901', 'เมืองนครปฐม', '19', 'Y');
INSERT INTO `ampur` VALUES ('263', '1902', 'กำแพงแสน', '19', 'Y');
INSERT INTO `ampur` VALUES ('264', '1903', 'ดอนตูม', '19', 'Y');
INSERT INTO `ampur` VALUES ('265', '1904', 'นครชัยศรี', '19', 'Y');
INSERT INTO `ampur` VALUES ('266', '1905', 'บางเลน', '19', 'Y');
INSERT INTO `ampur` VALUES ('267', '1906', 'พุทธมณฑล', '19', 'Y');
INSERT INTO `ampur` VALUES ('268', '1907', 'สามพราน', '19', 'Y');
INSERT INTO `ampur` VALUES ('269', '2001', 'เมืองนครพนม', '20', 'Y');
INSERT INTO `ampur` VALUES ('270', '2002', 'ท่าอุเทน', '20', 'Y');
INSERT INTO `ampur` VALUES ('271', '2003', 'ธาตุพนม', '20', 'Y');
INSERT INTO `ampur` VALUES ('272', '2004', 'นาแก', '20', 'Y');
INSERT INTO `ampur` VALUES ('273', '2005', 'นาหว้า', '20', 'Y');
INSERT INTO `ampur` VALUES ('274', '2006', 'บ้านแพง', '20', 'Y');
INSERT INTO `ampur` VALUES ('275', '2007', 'ปลาปาก', '20', 'Y');
INSERT INTO `ampur` VALUES ('276', '2008', 'โพนสวรรค์', '20', 'Y');
INSERT INTO `ampur` VALUES ('277', '2009', 'เรณูนคร', '20', 'Y');
INSERT INTO `ampur` VALUES ('278', '2010', 'ศรีสงคราม', '20', 'Y');
INSERT INTO `ampur` VALUES ('279', '2011', 'วังยาง', '20', 'Y');
INSERT INTO `ampur` VALUES ('280', '2012', 'นาทม', '20', 'Y');
INSERT INTO `ampur` VALUES ('281', '2101', 'เมืองนครราชสีมา', '21', 'Y');
INSERT INTO `ampur` VALUES ('282', '2102', 'แก้งสนามนาง', '21', 'Y');
INSERT INTO `ampur` VALUES ('283', '2103', 'ขามทะเลสอ', '21', 'Y');
INSERT INTO `ampur` VALUES ('284', '2104', 'ขามสะแกแสง', '21', 'Y');
INSERT INTO `ampur` VALUES ('285', '2105', 'คง', '21', 'Y');
INSERT INTO `ampur` VALUES ('286', '2106', 'ครบุรี', '21', 'Y');
INSERT INTO `ampur` VALUES ('287', '2107', 'จักราช', '21', 'Y');
INSERT INTO `ampur` VALUES ('288', '2108', 'ชุมพวง', '21', 'Y');
INSERT INTO `ampur` VALUES ('289', '2109', 'โชคชัย', '21', 'Y');
INSERT INTO `ampur` VALUES ('290', '2110', 'ด่านขุนทด', '21', 'Y');
INSERT INTO `ampur` VALUES ('291', '2111', 'โนนแดง', '21', 'Y');
INSERT INTO `ampur` VALUES ('292', '2112', 'โนนไทย', '21', 'Y');
INSERT INTO `ampur` VALUES ('293', '2113', 'โนนสูง', '21', 'Y');
INSERT INTO `ampur` VALUES ('294', '2114', 'บัวใหญ่', '21', 'Y');
INSERT INTO `ampur` VALUES ('295', '2115', 'บ้านเหลื่อม', '21', 'Y');
INSERT INTO `ampur` VALUES ('296', '2116', 'ประทาย', '21', 'Y');
INSERT INTO `ampur` VALUES ('297', '2117', 'ปักธงชัย', '21', 'Y');
INSERT INTO `ampur` VALUES ('298', '2118', 'ปากช่อง', '21', 'Y');
INSERT INTO `ampur` VALUES ('299', '2119', 'พิมาย', '21', 'Y');
INSERT INTO `ampur` VALUES ('300', '2120', 'วังน้ำเขียว', '21', 'Y');
INSERT INTO `ampur` VALUES ('301', '2121', 'สีคิ้ว', '21', 'Y');
INSERT INTO `ampur` VALUES ('302', '2122', 'สูงเนิน', '21', 'Y');
INSERT INTO `ampur` VALUES ('303', '2123', 'เสิงสาง', '21', 'Y');
INSERT INTO `ampur` VALUES ('304', '2124', 'ห้วยแถลง', '21', 'Y');
INSERT INTO `ampur` VALUES ('305', '2125', 'หนองบุนนาก', '21', 'Y');
INSERT INTO `ampur` VALUES ('306', '2126', 'เทพารักษ์', '21', 'Y');
INSERT INTO `ampur` VALUES ('307', '2127', 'เมืองยาง', '21', 'Y');
INSERT INTO `ampur` VALUES ('308', '2128', 'พระทองคำ', '21', 'Y');
INSERT INTO `ampur` VALUES ('309', '2129', 'ลำทะเมนชัย', '21', 'Y');
INSERT INTO `ampur` VALUES ('310', '2130', 'เฉลิมพระเกียรติ', '21', 'Y');
INSERT INTO `ampur` VALUES ('311', '2131', 'สีดา', '21', 'Y');
INSERT INTO `ampur` VALUES ('312', '2132', 'บัวลาย', '21', 'Y');
INSERT INTO `ampur` VALUES ('313', '2201', 'เมืองนครศรีธรรมราช', '22', 'Y');
INSERT INTO `ampur` VALUES ('314', '2202', 'ขนอม', '22', 'Y');
INSERT INTO `ampur` VALUES ('315', '2203', 'ฉวาง', '22', 'Y');
INSERT INTO `ampur` VALUES ('316', '2204', 'ชะอวด', '22', 'Y');
INSERT INTO `ampur` VALUES ('317', '2205', 'เชียรใหญ่', '22', 'Y');
INSERT INTO `ampur` VALUES ('318', '2206', 'ท่าศาลา', '22', 'Y');
INSERT INTO `ampur` VALUES ('319', '2207', 'ทุ่งใหญ่', '22', 'Y');
INSERT INTO `ampur` VALUES ('320', '2208', 'ทุ่งสง', '22', 'Y');
INSERT INTO `ampur` VALUES ('321', '2209', 'พระพรหม', '22', 'Y');
INSERT INTO `ampur` VALUES ('322', '2210', 'นาบอน', '22', 'Y');
INSERT INTO `ampur` VALUES ('323', '2211', 'บางขัน', '22', 'Y');
INSERT INTO `ampur` VALUES ('324', '2212', 'ปากพนัง', '22', 'Y');
INSERT INTO `ampur` VALUES ('325', '2213', 'พรหมคีรี', '22', 'Y');
INSERT INTO `ampur` VALUES ('326', '2214', 'พิปูน', '22', 'Y');
INSERT INTO `ampur` VALUES ('327', '2215', 'ร่อนพิบูลย์', '22', 'Y');
INSERT INTO `ampur` VALUES ('328', '2216', 'ลานสะกา', '22', 'Y');
INSERT INTO `ampur` VALUES ('329', '2217', 'สิชล', '22', 'Y');
INSERT INTO `ampur` VALUES ('330', '2218', 'หัวไทร', '22', 'Y');
INSERT INTO `ampur` VALUES ('331', '2219', 'จุฬาภรณ์', '22', 'Y');
INSERT INTO `ampur` VALUES ('332', '2220', 'นบพิตำ', '22', 'Y');
INSERT INTO `ampur` VALUES ('333', '2221', 'ช้างกลาง', '22', 'Y');
INSERT INTO `ampur` VALUES ('334', '2222', 'ถ้ำพรรณรา', '22', 'Y');
INSERT INTO `ampur` VALUES ('335', '2223', 'เฉลิมพระเกียรติ', '22', 'Y');
INSERT INTO `ampur` VALUES ('336', '2301', 'เมืองนครสวรรค์', '23', 'Y');
INSERT INTO `ampur` VALUES ('337', '2302', 'เก้าเลี้ยว', '23', 'Y');
INSERT INTO `ampur` VALUES ('338', '2303', 'โกรกพระ', '23', 'Y');
INSERT INTO `ampur` VALUES ('339', '2304', 'ชุมแสง', '23', 'Y');
INSERT INTO `ampur` VALUES ('340', '2305', 'ตากฟ้า', '23', 'Y');
INSERT INTO `ampur` VALUES ('341', '2306', 'ตาคลี', '23', 'Y');
INSERT INTO `ampur` VALUES ('342', '2307', 'ท่าตะโก', '23', 'Y');
INSERT INTO `ampur` VALUES ('343', '2308', 'บรรพตพิสัย', '23', 'Y');
INSERT INTO `ampur` VALUES ('344', '2309', 'พยุหคีรี', '23', 'Y');
INSERT INTO `ampur` VALUES ('345', '2310', 'ไพศาลี', '23', 'Y');
INSERT INTO `ampur` VALUES ('346', '2311', 'แม่วงก์', '23', 'Y');
INSERT INTO `ampur` VALUES ('347', '2312', 'ลาดยาว', '23', 'Y');
INSERT INTO `ampur` VALUES ('348', '2313', 'หนองบัว', '23', 'Y');
INSERT INTO `ampur` VALUES ('349', '2314', 'แม่เปิน', '23', 'Y');
INSERT INTO `ampur` VALUES ('350', '2315', 'ชุมตาบง', '23', 'Y');
INSERT INTO `ampur` VALUES ('351', '2401', 'เมืองนนทบุรี', '24', 'Y');
INSERT INTO `ampur` VALUES ('352', '2402', 'ไทรน้อย', '24', 'Y');
INSERT INTO `ampur` VALUES ('353', '2403', 'บางกรวย', '24', 'Y');
INSERT INTO `ampur` VALUES ('354', '2404', 'บางบัวทอง', '24', 'Y');
INSERT INTO `ampur` VALUES ('355', '2405', 'บางใหญ่', '24', 'Y');
INSERT INTO `ampur` VALUES ('356', '2406', 'ปากเกร็ด', '24', 'Y');
INSERT INTO `ampur` VALUES ('357', '2501', 'เมืองนราธิวาส', '25', 'Y');
INSERT INTO `ampur` VALUES ('358', '2502', 'จะแนะ', '25', 'Y');
INSERT INTO `ampur` VALUES ('359', '2503', 'ตากใบ', '25', 'Y');
INSERT INTO `ampur` VALUES ('360', '2504', 'บาเจาะ', '25', 'Y');
INSERT INTO `ampur` VALUES ('361', '2505', 'ยี่งอ', '25', 'Y');
INSERT INTO `ampur` VALUES ('362', '2506', 'ระแงะ', '25', 'Y');
INSERT INTO `ampur` VALUES ('363', '2507', 'รือเสาะ', '25', 'Y');
INSERT INTO `ampur` VALUES ('364', '2508', 'แว้ง', '25', 'Y');
INSERT INTO `ampur` VALUES ('365', '2509', 'ศรีสาคร', '25', 'Y');
INSERT INTO `ampur` VALUES ('366', '2510', 'สุคิริน', '25', 'Y');
INSERT INTO `ampur` VALUES ('367', '2511', 'สุไหงโกลก', '25', 'Y');
INSERT INTO `ampur` VALUES ('368', '2512', 'สุไหงปาดี', '25', 'Y');
INSERT INTO `ampur` VALUES ('369', '2513', 'เจาะไอร้อง', '25', 'Y');
INSERT INTO `ampur` VALUES ('370', '2601', 'เมืองน่าน', '26', 'Y');
INSERT INTO `ampur` VALUES ('371', '2602', 'เชียงกลาง', '26', 'Y');
INSERT INTO `ampur` VALUES ('372', '2603', 'ท่าวังผา', '26', 'Y');
INSERT INTO `ampur` VALUES ('373', '2604', 'ทุ่งช้าง', '26', 'Y');
INSERT INTO `ampur` VALUES ('374', '2605', 'นาน้อย', '26', 'Y');
INSERT INTO `ampur` VALUES ('375', '2606', 'นาหมื่น', '26', 'Y');
INSERT INTO `ampur` VALUES ('376', '2607', 'บ้านหลวง', '26', 'Y');
INSERT INTO `ampur` VALUES ('377', '2608', 'ปัว', '26', 'Y');
INSERT INTO `ampur` VALUES ('378', '2609', 'แม่จริม', '26', 'Y');
INSERT INTO `ampur` VALUES ('379', '2610', 'เวียงสา', '26', 'Y');
INSERT INTO `ampur` VALUES ('380', '2611', 'สันติสุข', '26', 'Y');
INSERT INTO `ampur` VALUES ('381', '2612', 'บ่อเกลือ', '26', 'Y');
INSERT INTO `ampur` VALUES ('382', '2613', 'สองแคว', '26', 'Y');
INSERT INTO `ampur` VALUES ('383', '2614', 'เฉลิมพระเกียรติ', '26', 'Y');
INSERT INTO `ampur` VALUES ('384', '2615', 'ภูเพียง', '26', 'Y');
INSERT INTO `ampur` VALUES ('385', '2701', 'เมืองบุรีรัมย์', '27', 'Y');
INSERT INTO `ampur` VALUES ('386', '2702', 'กระสัง', '27', 'Y');
INSERT INTO `ampur` VALUES ('387', '2703', 'คูเมือง', '27', 'Y');
INSERT INTO `ampur` VALUES ('388', '2704', 'ชำนิ', '27', 'Y');
INSERT INTO `ampur` VALUES ('389', '2705', 'นาโพธิ์', '27', 'Y');
INSERT INTO `ampur` VALUES ('390', '2706', 'นางรอง', '27', 'Y');
INSERT INTO `ampur` VALUES ('391', '2707', 'โนนดินแดง', '27', 'Y');
INSERT INTO `ampur` VALUES ('392', '2708', 'โนนสุวรรณ', '27', 'Y');
INSERT INTO `ampur` VALUES ('393', '2709', 'บ้านกรวด', '27', 'Y');
INSERT INTO `ampur` VALUES ('394', '2710', 'พลับพลาชัย', '27', 'Y');
INSERT INTO `ampur` VALUES ('395', '2711', 'บ้านใหม่ไชยพจน์', '27', 'Y');
INSERT INTO `ampur` VALUES ('396', '2712', 'ประโคนชัย', '27', 'Y');
INSERT INTO `ampur` VALUES ('397', '2713', 'ปะคำ', '27', 'Y');
INSERT INTO `ampur` VALUES ('398', '2714', 'พุทไธสง', '27', 'Y');
INSERT INTO `ampur` VALUES ('399', '2715', 'ละหานทราย', '27', 'Y');
INSERT INTO `ampur` VALUES ('400', '2716', 'ลำปลายมาศ', '27', 'Y');
INSERT INTO `ampur` VALUES ('401', '2717', 'สตึก', '27', 'Y');
INSERT INTO `ampur` VALUES ('402', '2718', 'หนองกี่', '27', 'Y');
INSERT INTO `ampur` VALUES ('403', '2719', 'หนองหงส์', '27', 'Y');
INSERT INTO `ampur` VALUES ('404', '2720', 'ห้วยราช', '27', 'Y');
INSERT INTO `ampur` VALUES ('405', '2721', 'บ้านด่าน', '27', 'Y');
INSERT INTO `ampur` VALUES ('406', '2722', 'เฉลิมพระเกียรติ', '27', 'Y');
INSERT INTO `ampur` VALUES ('407', '2723', 'แคนดง', '27', 'Y');
INSERT INTO `ampur` VALUES ('408', '2801', 'เมืองปทุมธานี', '28', 'Y');
INSERT INTO `ampur` VALUES ('409', '2802', 'คลองหลวง', '28', 'Y');
INSERT INTO `ampur` VALUES ('410', '2803', 'ธัญบุรี', '28', 'Y');
INSERT INTO `ampur` VALUES ('411', '2804', 'ลาดหลุมแก้ว', '28', 'Y');
INSERT INTO `ampur` VALUES ('412', '2805', 'ลำลูกกา', '28', 'Y');
INSERT INTO `ampur` VALUES ('413', '2806', 'สามโคก', '28', 'Y');
INSERT INTO `ampur` VALUES ('414', '2807', 'หนองเสือ', '28', 'Y');
INSERT INTO `ampur` VALUES ('415', '2901', 'เมืองประจวบคีรีขันธ์', '29', 'Y');
INSERT INTO `ampur` VALUES ('416', '2902', 'กุยบุรี', '29', 'Y');
INSERT INTO `ampur` VALUES ('417', '2903', 'ทับสะแก', '29', 'Y');
INSERT INTO `ampur` VALUES ('418', '2904', 'บางสะพาน', '29', 'Y');
INSERT INTO `ampur` VALUES ('419', '2905', 'บางสะพานน้อย', '29', 'Y');
INSERT INTO `ampur` VALUES ('420', '2906', 'ปราณบุรี', '29', 'Y');
INSERT INTO `ampur` VALUES ('421', '2907', 'หัวหิน', '29', 'Y');
INSERT INTO `ampur` VALUES ('422', '2908', 'สามร้อยยอด', '29', 'Y');
INSERT INTO `ampur` VALUES ('423', '3001', 'เมืองปราจีนบุรี', '30', 'Y');
INSERT INTO `ampur` VALUES ('424', '3002', 'กบินทร์บุรี', '30', 'Y');
INSERT INTO `ampur` VALUES ('425', '3003', 'ศรีมโหสถ', '30', 'Y');
INSERT INTO `ampur` VALUES ('426', '3004', 'นาดี', '30', 'Y');
INSERT INTO `ampur` VALUES ('427', '3005', 'บ้านสร้าง', '30', 'Y');
INSERT INTO `ampur` VALUES ('428', '3006', 'ประจันตคาม', '30', 'Y');
INSERT INTO `ampur` VALUES ('429', '3007', 'ศรีมหาโพธิ', '30', 'Y');
INSERT INTO `ampur` VALUES ('430', '3101', 'เมืองปัตตานี', '31', 'Y');
INSERT INTO `ampur` VALUES ('431', '3102', 'กะพ้อ', '31', 'Y');
INSERT INTO `ampur` VALUES ('432', '3103', 'โคกโพธิ์', '31', 'Y');
INSERT INTO `ampur` VALUES ('433', '3104', 'ทุ่งยางแดง', '31', 'Y');
INSERT INTO `ampur` VALUES ('434', '3105', 'ปะนาเระ', '31', 'Y');
INSERT INTO `ampur` VALUES ('435', '3106', 'มายอ', '31', 'Y');
INSERT INTO `ampur` VALUES ('436', '3107', 'ไม้แก่น', '31', 'Y');
INSERT INTO `ampur` VALUES ('437', '3108', 'ยะรัง', '31', 'Y');
INSERT INTO `ampur` VALUES ('438', '3109', 'ยะหริ่ง', '31', 'Y');
INSERT INTO `ampur` VALUES ('439', '3110', 'สายบุรี', '31', 'Y');
INSERT INTO `ampur` VALUES ('440', '3111', 'หนองจิก', '31', 'Y');
INSERT INTO `ampur` VALUES ('441', '3112', 'แม่ลาน', '31', 'Y');
INSERT INTO `ampur` VALUES ('442', '3201', 'พระนครศรีอยุธยา', '32', 'Y');
INSERT INTO `ampur` VALUES ('443', '3202', 'ท่าเรือ', '32', 'Y');
INSERT INTO `ampur` VALUES ('444', '3203', 'นครหลวง', '32', 'Y');
INSERT INTO `ampur` VALUES ('445', '3204', 'บางซ้าย', '32', 'Y');
INSERT INTO `ampur` VALUES ('446', '3205', 'บางไทร', '32', 'Y');
INSERT INTO `ampur` VALUES ('447', '3206', 'บางบาล', '32', 'Y');
INSERT INTO `ampur` VALUES ('448', '3207', 'บางปะหัน', '32', 'Y');
INSERT INTO `ampur` VALUES ('449', '3208', 'บางปะอิน', '32', 'Y');
INSERT INTO `ampur` VALUES ('450', '3209', 'บ้านแพรก', '32', 'Y');
INSERT INTO `ampur` VALUES ('451', '3210', 'ผักไห่', '32', 'Y');
INSERT INTO `ampur` VALUES ('452', '3211', 'ภาชี', '32', 'Y');
INSERT INTO `ampur` VALUES ('453', '3212', 'มหาราช', '32', 'Y');
INSERT INTO `ampur` VALUES ('454', '3213', 'ลาดบัวหลวง', '32', 'Y');
INSERT INTO `ampur` VALUES ('455', '3214', 'วังน้อย', '32', 'Y');
INSERT INTO `ampur` VALUES ('456', '3215', 'เสนา', '32', 'Y');
INSERT INTO `ampur` VALUES ('457', '3216', 'อุทัย', '32', 'Y');
INSERT INTO `ampur` VALUES ('458', '3301', 'เมืองพะเยา', '33', 'Y');
INSERT INTO `ampur` VALUES ('459', '3302', 'จุน', '33', 'Y');
INSERT INTO `ampur` VALUES ('460', '3303', 'เชียงคำ', '33', 'Y');
INSERT INTO `ampur` VALUES ('461', '3304', 'เชียงม่วน', '33', 'Y');
INSERT INTO `ampur` VALUES ('462', '3305', 'ดอกคำใต้', '33', 'Y');
INSERT INTO `ampur` VALUES ('463', '3306', 'ปง', '33', 'Y');
INSERT INTO `ampur` VALUES ('464', '3307', 'แม่ใจ', '33', 'Y');
INSERT INTO `ampur` VALUES ('465', '3308', 'ภูซาง', '33', 'Y');
INSERT INTO `ampur` VALUES ('466', '3309', 'ภูกามยาว', '33', 'Y');
INSERT INTO `ampur` VALUES ('467', '3401', 'เมืองพังงา', '34', 'Y');
INSERT INTO `ampur` VALUES ('468', '3402', 'กะปง', '34', 'Y');
INSERT INTO `ampur` VALUES ('469', '3403', 'เกาะยาว', '34', 'Y');
INSERT INTO `ampur` VALUES ('470', '3404', 'คุระบุรี', '34', 'Y');
INSERT INTO `ampur` VALUES ('471', '3405', 'ตะกั่วทุ่ง', '34', 'Y');
INSERT INTO `ampur` VALUES ('472', '3406', 'ตะกั่วป่า', '34', 'Y');
INSERT INTO `ampur` VALUES ('473', '3407', 'ทับปุด', '34', 'Y');
INSERT INTO `ampur` VALUES ('474', '3408', 'ท้ายเหมือง', '34', 'Y');
INSERT INTO `ampur` VALUES ('475', '3501', 'เมืองพัทลุง', '35', 'Y');
INSERT INTO `ampur` VALUES ('476', '3502', 'กงหรา', '35', 'Y');
INSERT INTO `ampur` VALUES ('477', '3503', 'เขาชัยสน', '35', 'Y');
INSERT INTO `ampur` VALUES ('478', '3504', 'ควนขนุน', '35', 'Y');
INSERT INTO `ampur` VALUES ('479', '3505', 'ตะโหมด', '35', 'Y');
INSERT INTO `ampur` VALUES ('480', '3506', 'ปากพะยูน', '35', 'Y');
INSERT INTO `ampur` VALUES ('481', '3507', 'ป่าบอน', '35', 'Y');
INSERT INTO `ampur` VALUES ('482', '3508', 'ป่าพะยอม', '35', 'Y');
INSERT INTO `ampur` VALUES ('483', '3509', 'ศรีบรรพต', '35', 'Y');
INSERT INTO `ampur` VALUES ('484', '3510', 'บางแก้ว', '35', 'Y');
INSERT INTO `ampur` VALUES ('485', '3511', 'ศรีนครินทร์', '35', 'Y');
INSERT INTO `ampur` VALUES ('486', '3601', 'เมืองพิจิตร', '36', 'Y');
INSERT INTO `ampur` VALUES ('487', '3602', 'ตะพานหิน', '36', 'Y');
INSERT INTO `ampur` VALUES ('488', '3603', 'ทับคล้อ', '36', 'Y');
INSERT INTO `ampur` VALUES ('489', '3604', 'บางมูลนาก', '36', 'Y');
INSERT INTO `ampur` VALUES ('490', '3605', 'โพทะเล', '36', 'Y');
INSERT INTO `ampur` VALUES ('491', '3606', 'โพธิ์ประทับช้าง', '36', 'Y');
INSERT INTO `ampur` VALUES ('492', '3607', 'สามง่าม', '36', 'Y');
INSERT INTO `ampur` VALUES ('493', '3608', 'วังทรายพูน', '36', 'Y');
INSERT INTO `ampur` VALUES ('494', '3609', 'สากเหล็ก', '36', 'Y');
INSERT INTO `ampur` VALUES ('495', '3610', 'บึงนาราง', '36', 'Y');
INSERT INTO `ampur` VALUES ('496', '3611', 'ดงเจริญ', '36', 'Y');
INSERT INTO `ampur` VALUES ('497', '3612', 'วชิรบารมี', '36', 'Y');
INSERT INTO `ampur` VALUES ('498', '3701', 'เมืองพิษณุโลก', '37', 'Y');
INSERT INTO `ampur` VALUES ('499', '3702', 'นครไทย', '37', 'Y');
INSERT INTO `ampur` VALUES ('500', '3703', 'ชาติตระการ', '37', 'Y');
INSERT INTO `ampur` VALUES ('501', '3704', 'เนินมะปราง', '37', 'Y');
INSERT INTO `ampur` VALUES ('502', '3705', 'บางกระทุ่ม', '37', 'Y');
INSERT INTO `ampur` VALUES ('503', '3706', 'บางระกำ', '37', 'Y');
INSERT INTO `ampur` VALUES ('504', '3707', 'พรหมพิราม', '37', 'Y');
INSERT INTO `ampur` VALUES ('505', '3708', 'วังทอง', '37', 'Y');
INSERT INTO `ampur` VALUES ('506', '3709', 'วัดโบสถ์', '37', 'Y');
INSERT INTO `ampur` VALUES ('507', '3801', 'เมืองเพชรบุรี', '38', 'Y');
INSERT INTO `ampur` VALUES ('508', '3802', 'แก่งกระจาน', '38', 'Y');
INSERT INTO `ampur` VALUES ('509', '3803', 'เขาย้อย', '38', 'Y');
INSERT INTO `ampur` VALUES ('510', '3804', 'ชะอำ', '38', 'Y');
INSERT INTO `ampur` VALUES ('511', '3805', 'ท่ายาง', '38', 'Y');
INSERT INTO `ampur` VALUES ('512', '3806', 'บ้านลาด', '38', 'Y');
INSERT INTO `ampur` VALUES ('513', '3807', 'บ้านแหลม', '38', 'Y');
INSERT INTO `ampur` VALUES ('514', '3808', 'หนองหญ้าปล้อง', '38', 'Y');
INSERT INTO `ampur` VALUES ('515', '3901', 'เมืองเพชรบูรณ์', '39', 'Y');
INSERT INTO `ampur` VALUES ('516', '3902', 'เขาค้อ', '39', 'Y');
INSERT INTO `ampur` VALUES ('517', '3903', 'ชนแดน', '39', 'Y');
INSERT INTO `ampur` VALUES ('518', '3904', 'น้ำหนาว', '39', 'Y');
INSERT INTO `ampur` VALUES ('519', '3905', 'บึงสามพัน', '39', 'Y');
INSERT INTO `ampur` VALUES ('520', '3906', 'วิเชียรบุรี', '39', 'Y');
INSERT INTO `ampur` VALUES ('521', '3907', 'ศรีเทพ', '39', 'Y');
INSERT INTO `ampur` VALUES ('522', '3908', 'หนองไผ่', '39', 'Y');
INSERT INTO `ampur` VALUES ('523', '3909', 'หล่มเก่า', '39', 'Y');
INSERT INTO `ampur` VALUES ('524', '3910', 'หล่มสัก', '39', 'Y');
INSERT INTO `ampur` VALUES ('525', '3911', 'วังโป่ง', '39', 'Y');
INSERT INTO `ampur` VALUES ('526', '4001', 'เมืองแพร่', '40', 'Y');
INSERT INTO `ampur` VALUES ('527', '4002', 'เด่นชัย', '40', 'Y');
INSERT INTO `ampur` VALUES ('528', '4003', 'ร้องกวาง', '40', 'Y');
INSERT INTO `ampur` VALUES ('529', '4004', 'ลอง', '40', 'Y');
INSERT INTO `ampur` VALUES ('530', '4005', 'วังชิ้น', '40', 'Y');
INSERT INTO `ampur` VALUES ('531', '4006', 'สอง', '40', 'Y');
INSERT INTO `ampur` VALUES ('532', '4007', 'หนองม่วงไข่', '40', 'Y');
INSERT INTO `ampur` VALUES ('533', '4008', 'สูงเม่น', '40', 'Y');
INSERT INTO `ampur` VALUES ('534', '4101', 'เมืองภูเก็ต', '41', 'Y');
INSERT INTO `ampur` VALUES ('535', '4102', 'กะทู้', '41', 'Y');
INSERT INTO `ampur` VALUES ('536', '4103', 'ถลาง', '41', 'Y');
INSERT INTO `ampur` VALUES ('537', '4201', 'เมืองมหาสารคาม', '42', 'Y');
INSERT INTO `ampur` VALUES ('538', '4202', 'กันทรวิชัย', '42', 'Y');
INSERT INTO `ampur` VALUES ('539', '4203', 'แกดำ', '42', 'Y');
INSERT INTO `ampur` VALUES ('540', '4204', 'โกสุมพิสัย', '42', 'Y');
INSERT INTO `ampur` VALUES ('541', '4205', 'เชียงยืน', '42', 'Y');
INSERT INTO `ampur` VALUES ('542', '4206', 'นาเชือก', '42', 'Y');
INSERT INTO `ampur` VALUES ('543', '4207', 'นาดูน', '42', 'Y');
INSERT INTO `ampur` VALUES ('544', '4208', 'บรบือ', '42', 'Y');
INSERT INTO `ampur` VALUES ('545', '4209', 'พยัคฆภูมิพิสัย', '42', 'Y');
INSERT INTO `ampur` VALUES ('546', '4210', 'วาปีปทุม', '42', 'Y');
INSERT INTO `ampur` VALUES ('547', '4211', 'กุดรัง', '42', 'Y');
INSERT INTO `ampur` VALUES ('548', '4212', 'ยางสีสุราช', '42', 'Y');
INSERT INTO `ampur` VALUES ('549', '4213', 'ชื่นชม', '42', 'Y');
INSERT INTO `ampur` VALUES ('550', '4301', 'เมืองมุกดาหาร', '43', 'Y');
INSERT INTO `ampur` VALUES ('551', '4302', 'คำชะอี', '43', 'Y');
INSERT INTO `ampur` VALUES ('552', '4303', 'ดงหลวง', '43', 'Y');
INSERT INTO `ampur` VALUES ('553', '4304', 'ดอนตาล', '43', 'Y');
INSERT INTO `ampur` VALUES ('554', '4305', 'นิคมคำสร้อย', '43', 'Y');
INSERT INTO `ampur` VALUES ('555', '4306', 'หนองสูง', '43', 'Y');
INSERT INTO `ampur` VALUES ('556', '4307', 'หว้านใหญ่', '43', 'Y');
INSERT INTO `ampur` VALUES ('557', '4401', 'เมืองแม่ฮ่องสอน', '44', 'Y');
INSERT INTO `ampur` VALUES ('558', '4402', 'ขุนยวม', '44', 'Y');
INSERT INTO `ampur` VALUES ('559', '4403', 'ปางมะผ้า', '44', 'Y');
INSERT INTO `ampur` VALUES ('560', '4404', 'ปาย', '44', 'Y');
INSERT INTO `ampur` VALUES ('561', '4405', 'แม่ลาน้อย', '44', 'Y');
INSERT INTO `ampur` VALUES ('562', '4406', 'แม่สะเรียง', '44', 'Y');
INSERT INTO `ampur` VALUES ('563', '4407', 'สบเมย', '44', 'Y');
INSERT INTO `ampur` VALUES ('564', '4501', 'เมืองยโสธร', '45', 'Y');
INSERT INTO `ampur` VALUES ('565', '4502', 'กุดชุม', '45', 'Y');
INSERT INTO `ampur` VALUES ('566', '4503', 'ค้อวัง', '45', 'Y');
INSERT INTO `ampur` VALUES ('567', '4504', 'คำเขื่อนแก้ว', '45', 'Y');
INSERT INTO `ampur` VALUES ('568', '4505', 'ไทยเจริญ', '45', 'Y');
INSERT INTO `ampur` VALUES ('569', '4506', 'ทรายมูล', '45', 'Y');
INSERT INTO `ampur` VALUES ('570', '4507', 'ป่าติ้ว', '45', 'Y');
INSERT INTO `ampur` VALUES ('571', '4508', 'มหาชนะชัย', '45', 'Y');
INSERT INTO `ampur` VALUES ('572', '4509', 'เลิงนกทา', '45', 'Y');
INSERT INTO `ampur` VALUES ('573', '4601', 'เมืองยะลา', '46', 'Y');
INSERT INTO `ampur` VALUES ('574', '4602', 'กาบัง', '46', 'Y');
INSERT INTO `ampur` VALUES ('575', '4603', 'กรงปินัง', '46', 'Y');
INSERT INTO `ampur` VALUES ('576', '4604', 'ธารโต', '46', 'Y');
INSERT INTO `ampur` VALUES ('577', '4605', 'บันนังสตา', '46', 'Y');
INSERT INTO `ampur` VALUES ('578', '4606', 'เบตง', '46', 'Y');
INSERT INTO `ampur` VALUES ('579', '4607', 'ยะหา', '46', 'Y');
INSERT INTO `ampur` VALUES ('580', '4608', 'รามัน', '46', 'Y');
INSERT INTO `ampur` VALUES ('581', '4701', 'เมืองร้อยเอ็ด', '47', 'Y');
INSERT INTO `ampur` VALUES ('582', '4702', 'เกษตรวิสัย', '47', 'Y');
INSERT INTO `ampur` VALUES ('583', '4703', 'จตุรพักตร์พิมาน', '47', 'Y');
INSERT INTO `ampur` VALUES ('584', '4704', 'จังหาร', '47', 'Y');
INSERT INTO `ampur` VALUES ('585', '4705', 'ธวัชบุรี', '47', 'Y');
INSERT INTO `ampur` VALUES ('586', '4706', 'ปทุมรัตน์', '47', 'Y');
INSERT INTO `ampur` VALUES ('587', '4707', 'พนมไพร', '47', 'Y');
INSERT INTO `ampur` VALUES ('588', '4708', 'โพธิ์ชัย', '47', 'Y');
INSERT INTO `ampur` VALUES ('589', '4709', 'โพนทราย', '47', 'Y');
INSERT INTO `ampur` VALUES ('590', '4710', 'โพนทอง', '47', 'Y');
INSERT INTO `ampur` VALUES ('591', '4711', 'เมยวดี', '47', 'Y');
INSERT INTO `ampur` VALUES ('592', '4712', 'เมืองสรวง', '47', 'Y');
INSERT INTO `ampur` VALUES ('593', '4713', 'ศรีสมเด็จ', '47', 'Y');
INSERT INTO `ampur` VALUES ('594', '4714', 'เสลภูมิ', '47', 'Y');
INSERT INTO `ampur` VALUES ('595', '4715', 'สุวรรณภูมิ', '47', 'Y');
INSERT INTO `ampur` VALUES ('596', '4716', 'หนองพอก', '47', 'Y');
INSERT INTO `ampur` VALUES ('597', '4717', 'อาจสามารถ', '47', 'Y');
INSERT INTO `ampur` VALUES ('598', '4718', 'เชียงขวัญ', '47', 'Y');
INSERT INTO `ampur` VALUES ('599', '4719', 'หนองฮี', '47', 'Y');
INSERT INTO `ampur` VALUES ('600', '4720', 'ทุ่งเขาหลวง', '47', 'Y');
INSERT INTO `ampur` VALUES ('601', '4801', 'เมืองระนอง', '48', 'Y');
INSERT INTO `ampur` VALUES ('602', '4802', 'กระบุรี', '48', 'Y');
INSERT INTO `ampur` VALUES ('603', '4803', 'กะเปอร์', '48', 'Y');
INSERT INTO `ampur` VALUES ('604', '4804', 'ละอุ่น', '48', 'Y');
INSERT INTO `ampur` VALUES ('605', '4805', 'สุขสำราญ', '48', 'Y');
INSERT INTO `ampur` VALUES ('606', '4901', 'เมืองระยอง', '49', 'Y');
INSERT INTO `ampur` VALUES ('607', '4902', 'แกลง', '49', 'Y');
INSERT INTO `ampur` VALUES ('608', '4903', 'บ้านค่าย', '49', 'Y');
INSERT INTO `ampur` VALUES ('609', '4904', 'บ้านฉาง', '49', 'Y');
INSERT INTO `ampur` VALUES ('610', '4905', 'ปลวกแดง', '49', 'Y');
INSERT INTO `ampur` VALUES ('611', '4906', 'วังจันทร์', '49', 'Y');
INSERT INTO `ampur` VALUES ('612', '4907', 'เขาชะเมา', '49', 'Y');
INSERT INTO `ampur` VALUES ('613', '4908', 'นิคมพัฒนา', '49', 'Y');
INSERT INTO `ampur` VALUES ('614', '5001', 'เมืองราชบุรี', '50', 'Y');
INSERT INTO `ampur` VALUES ('615', '5002', 'จอมบึง', '50', 'Y');
INSERT INTO `ampur` VALUES ('616', '5003', 'ดำเนินสะดวก', '50', 'Y');
INSERT INTO `ampur` VALUES ('617', '5004', 'บางแพ', '50', 'Y');
INSERT INTO `ampur` VALUES ('618', '5005', 'บ้านโป่ง', '50', 'Y');
INSERT INTO `ampur` VALUES ('619', '5006', 'ปากท่อ', '50', 'Y');
INSERT INTO `ampur` VALUES ('620', '5007', 'โพธาราม', '50', 'Y');
INSERT INTO `ampur` VALUES ('621', '5008', 'วัดเพลง', '50', 'Y');
INSERT INTO `ampur` VALUES ('622', '5009', 'สวนผึ้ง', '50', 'Y');
INSERT INTO `ampur` VALUES ('623', '5010', 'บ้านคา', '50', 'Y');
INSERT INTO `ampur` VALUES ('624', '5101', 'เมืองลพบุรี', '51', 'Y');
INSERT INTO `ampur` VALUES ('625', '5102', 'โคกเจริญ', '51', 'Y');
INSERT INTO `ampur` VALUES ('626', '5103', 'โคกสำโรง', '51', 'Y');
INSERT INTO `ampur` VALUES ('627', '5104', 'ชัยบาดาล', '51', 'Y');
INSERT INTO `ampur` VALUES ('628', '5105', 'ท่าวุ้ง', '51', 'Y');
INSERT INTO `ampur` VALUES ('629', '5106', 'ท่าหลวง', '51', 'Y');
INSERT INTO `ampur` VALUES ('630', '5107', 'บ้านหมี่', '51', 'Y');
INSERT INTO `ampur` VALUES ('631', '5108', 'พัฒนานิคม', '51', 'Y');
INSERT INTO `ampur` VALUES ('632', '5109', 'ลำสนธิ', '51', 'Y');
INSERT INTO `ampur` VALUES ('633', '5110', 'สระโบถส์', '51', 'Y');
INSERT INTO `ampur` VALUES ('634', '5111', 'หนองม่วง', '51', 'Y');
INSERT INTO `ampur` VALUES ('635', '5201', 'เมืองเลย', '52', 'Y');
INSERT INTO `ampur` VALUES ('636', '5202', 'เชียงคาน', '52', 'Y');
INSERT INTO `ampur` VALUES ('637', '5203', 'ด่านซ้าย', '52', 'Y');
INSERT INTO `ampur` VALUES ('638', '5204', 'ท่าลี่', '52', 'Y');
INSERT INTO `ampur` VALUES ('639', '5205', 'นาด้วง', '52', 'Y');
INSERT INTO `ampur` VALUES ('640', '5206', 'นาแห้ว', '52', 'Y');
INSERT INTO `ampur` VALUES ('641', '5207', 'ปากชม', '52', 'Y');
INSERT INTO `ampur` VALUES ('642', '5208', 'ผาขาว', '52', 'Y');
INSERT INTO `ampur` VALUES ('643', '5209', 'ภูกระดึง', '52', 'Y');
INSERT INTO `ampur` VALUES ('644', '5210', 'ภูเรือ', '52', 'Y');
INSERT INTO `ampur` VALUES ('645', '5211', 'ภูหลวง', '52', 'Y');
INSERT INTO `ampur` VALUES ('646', '5212', 'วังสะพุง', '52', 'Y');
INSERT INTO `ampur` VALUES ('647', '5213', 'เอราวัณ', '52', 'Y');
INSERT INTO `ampur` VALUES ('648', '5214', 'หนองหิน', '52', 'Y');
INSERT INTO `ampur` VALUES ('649', '5301', 'เมืองลำปาง', '53', 'Y');
INSERT INTO `ampur` VALUES ('650', '5302', 'เกาะคา', '53', 'Y');
INSERT INTO `ampur` VALUES ('651', '5303', 'งาว', '53', 'Y');
INSERT INTO `ampur` VALUES ('652', '5304', 'แจ้ห่ม', '53', 'Y');
INSERT INTO `ampur` VALUES ('653', '5305', 'เถิน', '53', 'Y');
INSERT INTO `ampur` VALUES ('654', '5306', 'แม่ทะ', '53', 'Y');
INSERT INTO `ampur` VALUES ('655', '5307', 'แม่พริก', '53', 'Y');
INSERT INTO `ampur` VALUES ('656', '5308', 'เมืองปาน', '53', 'Y');
INSERT INTO `ampur` VALUES ('657', '5309', 'แม่เมาะ', '53', 'Y');
INSERT INTO `ampur` VALUES ('658', '5310', 'วังเหนือ', '53', 'Y');
INSERT INTO `ampur` VALUES ('659', '5311', 'สบปราบ', '53', 'Y');
INSERT INTO `ampur` VALUES ('660', '5312', 'เสริมงาม', '53', 'Y');
INSERT INTO `ampur` VALUES ('661', '5313', 'ห้างฉัตร', '53', 'Y');
INSERT INTO `ampur` VALUES ('662', '5401', 'เมืองลำพูน', '54', 'Y');
INSERT INTO `ampur` VALUES ('663', '5402', 'ทุ่งหัวช้าง', '54', 'Y');
INSERT INTO `ampur` VALUES ('664', '5403', 'บ้านโฮ่ง', '54', 'Y');
INSERT INTO `ampur` VALUES ('665', '5404', 'ป่าซาง', '54', 'Y');
INSERT INTO `ampur` VALUES ('666', '5405', 'แม่ทา', '54', 'Y');
INSERT INTO `ampur` VALUES ('667', '5406', 'ลี้', '54', 'Y');
INSERT INTO `ampur` VALUES ('668', '5407', 'บ้านธิ', '54', 'Y');
INSERT INTO `ampur` VALUES ('669', '5408', 'เวียงหนองล่อง', '54', 'Y');
INSERT INTO `ampur` VALUES ('670', '5501', 'เมืองศีรสะเกษ', '55', 'Y');
INSERT INTO `ampur` VALUES ('671', '5502', 'กันทรลักษ์', '55', 'Y');
INSERT INTO `ampur` VALUES ('672', '5503', 'กันทรารมย์', '55', 'Y');
INSERT INTO `ampur` VALUES ('673', '5504', 'ขุขันธ์', '55', 'Y');
INSERT INTO `ampur` VALUES ('674', '5505', 'ขุนหาญ', '55', 'Y');
INSERT INTO `ampur` VALUES ('675', '5506', 'น้ำเกลี้ยง', '55', 'Y');
INSERT INTO `ampur` VALUES ('676', '5507', 'โนนคูณ', '55', 'Y');
INSERT INTO `ampur` VALUES ('677', '5508', 'บึงบูรพ์', '55', 'Y');
INSERT INTO `ampur` VALUES ('678', '5509', 'เบญจลักษณ์', '55', 'Y');
INSERT INTO `ampur` VALUES ('679', '5510', 'ปรางค์กู่', '55', 'Y');
INSERT INTO `ampur` VALUES ('680', '5511', 'พยุห์', '55', 'Y');
INSERT INTO `ampur` VALUES ('681', '5512', 'ไพรบึง', '55', 'Y');
INSERT INTO `ampur` VALUES ('682', '5513', 'โพธิ์ศรีสุวรรณ', '55', 'Y');
INSERT INTO `ampur` VALUES ('683', '5514', 'ภูสิงห์', '55', 'Y');
INSERT INTO `ampur` VALUES ('684', '5515', 'เมืองจันทร์', '55', 'Y');
INSERT INTO `ampur` VALUES ('685', '5516', 'ยางชุมน้อย', '55', 'Y');
INSERT INTO `ampur` VALUES ('686', '5517', 'ราษีไศล', '55', 'Y');
INSERT INTO `ampur` VALUES ('687', '5518', 'วังหิน', '55', 'Y');
INSERT INTO `ampur` VALUES ('688', '5519', 'ศรีรัตนะ', '55', 'Y');
INSERT INTO `ampur` VALUES ('689', '5520', 'ห้วยทับทัน', '55', 'Y');
INSERT INTO `ampur` VALUES ('690', '5521', 'อุทุมพรพิสัย', '55', 'Y');
INSERT INTO `ampur` VALUES ('691', '5522', 'ศิลาลาด', '55', 'Y');
INSERT INTO `ampur` VALUES ('692', '5601', 'เมืองสกลนคร', '56', 'Y');
INSERT INTO `ampur` VALUES ('693', '5602', 'กุดบาก', '56', 'Y');
INSERT INTO `ampur` VALUES ('694', '5603', 'กุสุมาลย์', '56', 'Y');
INSERT INTO `ampur` VALUES ('695', '5604', 'คำตากล้า', '56', 'Y');
INSERT INTO `ampur` VALUES ('696', '5605', 'เจริญศิลป์', '56', 'Y');
INSERT INTO `ampur` VALUES ('697', '5606', 'เต่างอย', '56', 'Y');
INSERT INTO `ampur` VALUES ('698', '5607', 'นิคมน้ำอูน', '56', 'Y');
INSERT INTO `ampur` VALUES ('699', '5608', 'บ้านม่วง', '56', 'Y');
INSERT INTO `ampur` VALUES ('700', '5609', 'พรรณานิคม', '56', 'Y');
INSERT INTO `ampur` VALUES ('701', '5610', 'พังโคน', '56', 'Y');
INSERT INTO `ampur` VALUES ('702', '5611', 'วานรนิวาส', '56', 'Y');
INSERT INTO `ampur` VALUES ('703', '5612', 'วาริชภูมิ', '56', 'Y');
INSERT INTO `ampur` VALUES ('704', '5613', 'โคกศรีสุพรรณ', '56', 'Y');
INSERT INTO `ampur` VALUES ('705', '5614', 'สว่างแดนดิน', '56', 'Y');
INSERT INTO `ampur` VALUES ('706', '5615', 'ส่องดาว', '56', 'Y');
INSERT INTO `ampur` VALUES ('707', '5616', 'อากาศอำนวย', '56', 'Y');
INSERT INTO `ampur` VALUES ('708', '5617', 'ภูพาน', '56', 'Y');
INSERT INTO `ampur` VALUES ('709', '5618', 'โพนนาแก้ว', '56', 'Y');
INSERT INTO `ampur` VALUES ('710', '5701', 'เมืองสงขลา', '57', 'Y');
INSERT INTO `ampur` VALUES ('711', '5702', 'กระแสสินธุ์', '57', 'Y');
INSERT INTO `ampur` VALUES ('712', '5703', 'ควนเนียง', '57', 'Y');
INSERT INTO `ampur` VALUES ('713', '5704', 'จะนะ', '57', 'Y');
INSERT INTO `ampur` VALUES ('714', '5705', 'เทพา', '57', 'Y');
INSERT INTO `ampur` VALUES ('715', '5706', 'นาทวี', '57', 'Y');
INSERT INTO `ampur` VALUES ('716', '5707', 'นาหม่อม', '57', 'Y');
INSERT INTO `ampur` VALUES ('717', '5708', 'บางกล่ำ', '57', 'Y');
INSERT INTO `ampur` VALUES ('718', '5709', 'ระโนด', '57', 'Y');
INSERT INTO `ampur` VALUES ('719', '5710', 'รัตภูมิ', '57', 'Y');
INSERT INTO `ampur` VALUES ('720', '5711', 'สทิงพระ', '57', 'Y');
INSERT INTO `ampur` VALUES ('721', '5712', 'สะเดา', '57', 'Y');
INSERT INTO `ampur` VALUES ('722', '5713', 'สะบ้าย้อย', '57', 'Y');
INSERT INTO `ampur` VALUES ('723', '5714', 'สิงหนคร', '57', 'Y');
INSERT INTO `ampur` VALUES ('724', '5715', 'หาดใหญ่', '57', 'Y');
INSERT INTO `ampur` VALUES ('725', '5716', 'คลองหอยโข่ง', '57', 'Y');
INSERT INTO `ampur` VALUES ('726', '5801', 'เมืองสตูล', '58', 'Y');
INSERT INTO `ampur` VALUES ('727', '5802', 'ควนกาหลง', '58', 'Y');
INSERT INTO `ampur` VALUES ('728', '5803', 'ควนโดน', '58', 'Y');
INSERT INTO `ampur` VALUES ('729', '5804', 'ท่าแพ', '58', 'Y');
INSERT INTO `ampur` VALUES ('730', '5805', 'ทุ่งหว้า', '58', 'Y');
INSERT INTO `ampur` VALUES ('731', '5806', 'ละงู', '58', 'Y');
INSERT INTO `ampur` VALUES ('732', '5807', 'มะนัง', '58', 'Y');
INSERT INTO `ampur` VALUES ('733', '5901', 'เมืองสมุทรปราการ', '59', 'Y');
INSERT INTO `ampur` VALUES ('734', '5902', 'บางบ่อ', '59', 'Y');
INSERT INTO `ampur` VALUES ('735', '5903', 'บางพลี', '59', 'Y');
INSERT INTO `ampur` VALUES ('736', '5904', 'พระประแดง', '59', 'Y');
INSERT INTO `ampur` VALUES ('737', '5905', 'พระสมุทรเจดีย์', '59', 'Y');
INSERT INTO `ampur` VALUES ('738', '5906', 'บางเสาธง', '59', 'Y');
INSERT INTO `ampur` VALUES ('739', '6001', 'เมืองสมุทรสงคราม', '60', 'Y');
INSERT INTO `ampur` VALUES ('740', '6002', 'บางคณที', '60', 'Y');
INSERT INTO `ampur` VALUES ('741', '6003', 'อัมพวา', '60', 'Y');
INSERT INTO `ampur` VALUES ('742', '6101', 'เมืองสมุทรสาคร', '61', 'Y');
INSERT INTO `ampur` VALUES ('743', '6102', 'กระทุ่มแบน', '61', 'Y');
INSERT INTO `ampur` VALUES ('744', '6103', 'บ้านแพ้ว', '61', 'Y');
INSERT INTO `ampur` VALUES ('745', '6201', 'เมืองสระแก้ว', '62', 'Y');
INSERT INTO `ampur` VALUES ('746', '6202', 'เขาฉกรรจ์', '62', 'Y');
INSERT INTO `ampur` VALUES ('747', '6203', 'คลองหาด', '62', 'Y');
INSERT INTO `ampur` VALUES ('748', '6204', 'ตาพระยา', '62', 'Y');
INSERT INTO `ampur` VALUES ('749', '6205', 'วังน้ำเย็น', '62', 'Y');
INSERT INTO `ampur` VALUES ('750', '6206', 'วัฒนานคร', '62', 'Y');
INSERT INTO `ampur` VALUES ('751', '6207', 'อรัญประเทศ', '62', 'Y');
INSERT INTO `ampur` VALUES ('752', '6208', 'โคกสูง', '62', 'Y');
INSERT INTO `ampur` VALUES ('753', '6209', 'วังสมบูรณ์', '62', 'Y');
INSERT INTO `ampur` VALUES ('754', '6301', 'เมืองสระบุรี', '63', 'Y');
INSERT INTO `ampur` VALUES ('755', '6302', 'แก่งคอย', '63', 'Y');
INSERT INTO `ampur` VALUES ('756', '6303', 'ดอนพุด', '63', 'Y');
INSERT INTO `ampur` VALUES ('757', '6304', 'บ้านหมอ', '63', 'Y');
INSERT INTO `ampur` VALUES ('758', '6305', 'พระพุทธบาท', '63', 'Y');
INSERT INTO `ampur` VALUES ('759', '6306', 'มวกเหล็ก', '63', 'Y');
INSERT INTO `ampur` VALUES ('760', '6307', 'วิหารแดง', '63', 'Y');
INSERT INTO `ampur` VALUES ('761', '6308', 'เสาไห้', '63', 'Y');
INSERT INTO `ampur` VALUES ('762', '6309', 'หนองแค', '63', 'Y');
INSERT INTO `ampur` VALUES ('763', '6310', 'หนองแซง', '63', 'Y');
INSERT INTO `ampur` VALUES ('764', '6311', 'หนองโดน', '63', 'Y');
INSERT INTO `ampur` VALUES ('765', '6312', 'วังม่วง', '63', 'Y');
INSERT INTO `ampur` VALUES ('766', '6313', 'เฉลิมพระเกียรติ', '63', 'Y');
INSERT INTO `ampur` VALUES ('767', '6401', 'เมืองสิงห์บุรี', '64', 'Y');
INSERT INTO `ampur` VALUES ('768', '6402', 'ค่ายบางระจัน', '64', 'Y');
INSERT INTO `ampur` VALUES ('769', '6403', 'ท่าช้าง', '64', 'Y');
INSERT INTO `ampur` VALUES ('770', '6404', 'บางระจัน', '64', 'Y');
INSERT INTO `ampur` VALUES ('771', '6405', 'พรหมบุรี', '64', 'Y');
INSERT INTO `ampur` VALUES ('772', '6406', 'อินทร์บุรี', '64', 'Y');
INSERT INTO `ampur` VALUES ('773', '6501', 'เมืองสุโขทัย', '65', 'Y');
INSERT INTO `ampur` VALUES ('774', '6502', 'กงไกรลาศ', '65', 'Y');
INSERT INTO `ampur` VALUES ('775', '6503', 'คีรีมาศ', '65', 'Y');
INSERT INTO `ampur` VALUES ('776', '6504', 'ทุ่งเสลี่ยม', '65', 'Y');
INSERT INTO `ampur` VALUES ('777', '6505', 'บ้านด่านลานหอย', '65', 'Y');
INSERT INTO `ampur` VALUES ('778', '6506', 'ศรีนคร', '65', 'Y');
INSERT INTO `ampur` VALUES ('779', '6507', 'ศรีสัชนาลัย', '65', 'Y');
INSERT INTO `ampur` VALUES ('780', '6508', 'ศรีสำโรง', '65', 'Y');
INSERT INTO `ampur` VALUES ('781', '6509', 'สวรรคโลก', '65', 'Y');
INSERT INTO `ampur` VALUES ('782', '6601', 'เมืองสุพรรณบุรี', '66', 'Y');
INSERT INTO `ampur` VALUES ('783', '6602', 'ดอนเจดีย์', '66', 'Y');
INSERT INTO `ampur` VALUES ('784', '6603', 'ด่านช้าง', '66', 'Y');
INSERT INTO `ampur` VALUES ('785', '6604', 'เดิมบางนางบวช', '66', 'Y');
INSERT INTO `ampur` VALUES ('786', '6605', 'บางปลาม้า', '66', 'Y');
INSERT INTO `ampur` VALUES ('787', '6606', 'ศรีประจันต์', '66', 'Y');
INSERT INTO `ampur` VALUES ('788', '6607', 'สองพี่น้อง', '66', 'Y');
INSERT INTO `ampur` VALUES ('789', '6608', 'สามชุก', '66', 'Y');
INSERT INTO `ampur` VALUES ('790', '6609', 'อู่ทอง', '66', 'Y');
INSERT INTO `ampur` VALUES ('791', '6610', 'หนองหญ้าไซ', '66', 'Y');
INSERT INTO `ampur` VALUES ('792', '6701', 'เมืองสุราษฎร์ธานี', '67', 'Y');
INSERT INTO `ampur` VALUES ('793', '6702', 'กาญจนดิษฐ์', '67', 'Y');
INSERT INTO `ampur` VALUES ('794', '6703', 'เกาะพะงัน', '67', 'Y');
INSERT INTO `ampur` VALUES ('795', '6704', 'เกาะสมุย', '67', 'Y');
INSERT INTO `ampur` VALUES ('796', '6705', 'คีรีรัฐนิคม', '67', 'Y');
INSERT INTO `ampur` VALUES ('797', '6706', 'เคียนซา', '67', 'Y');
INSERT INTO `ampur` VALUES ('798', '6707', 'ชัยบุรี', '67', 'Y');
INSERT INTO `ampur` VALUES ('799', '6708', 'ไชยา', '67', 'Y');
INSERT INTO `ampur` VALUES ('800', '6709', 'ดอนสัก', '67', 'Y');
INSERT INTO `ampur` VALUES ('801', '6710', 'ท่าฉาง', '67', 'Y');
INSERT INTO `ampur` VALUES ('802', '6711', 'ท่าชนะ', '67', 'Y');
INSERT INTO `ampur` VALUES ('803', '6712', 'บ้านตาขุน', '67', 'Y');
INSERT INTO `ampur` VALUES ('804', '6713', 'บ้านนาเดิม', '67', 'Y');
INSERT INTO `ampur` VALUES ('805', '6714', 'บ้านนาสาร', '67', 'Y');
INSERT INTO `ampur` VALUES ('806', '6715', 'พนม', '67', 'Y');
INSERT INTO `ampur` VALUES ('807', '6716', 'พระแสง', '67', 'Y');
INSERT INTO `ampur` VALUES ('808', '6717', 'พุนพิน', '67', 'Y');
INSERT INTO `ampur` VALUES ('809', '6718', 'วิภาวดี', '67', 'Y');
INSERT INTO `ampur` VALUES ('810', '6719', 'เวียงสระ', '67', 'Y');
INSERT INTO `ampur` VALUES ('811', '6801', 'เมืองสุรินทร์', '68', 'Y');
INSERT INTO `ampur` VALUES ('812', '6802', 'กาบเชิง', '68', 'Y');
INSERT INTO `ampur` VALUES ('813', '6803', 'จอมพระ', '68', 'Y');
INSERT INTO `ampur` VALUES ('814', '6804', 'ชุมพลบุรี', '68', 'Y');
INSERT INTO `ampur` VALUES ('815', '6805', 'ท่าตูม', '68', 'Y');
INSERT INTO `ampur` VALUES ('816', '6806', 'บัวเชด', '68', 'Y');
INSERT INTO `ampur` VALUES ('817', '6807', 'ปราสาท', '68', 'Y');
INSERT INTO `ampur` VALUES ('818', '6808', 'รัตนบุรี', '68', 'Y');
INSERT INTO `ampur` VALUES ('819', '6809', 'ลำดวน', '68', 'Y');
INSERT INTO `ampur` VALUES ('820', '6810', 'ศีขรภูมิ', '68', 'Y');
INSERT INTO `ampur` VALUES ('821', '6811', 'สนม', '68', 'Y');
INSERT INTO `ampur` VALUES ('822', '6812', 'สังขะ', '68', 'Y');
INSERT INTO `ampur` VALUES ('823', '6813', 'สำโรงทาบ', '68', 'Y');
INSERT INTO `ampur` VALUES ('824', '6814', 'ศรีณรงค์', '68', 'Y');
INSERT INTO `ampur` VALUES ('825', '6815', 'พนมดงรัก', '68', 'Y');
INSERT INTO `ampur` VALUES ('826', '6816', 'เขวาสินรินทร์', '68', 'Y');
INSERT INTO `ampur` VALUES ('827', '6817', 'โนนนารายณ์', '68', 'Y');
INSERT INTO `ampur` VALUES ('828', '6901', 'เมืองหนองคาย', '69', 'Y');
INSERT INTO `ampur` VALUES ('829', '6902', 'เซกา', '69', 'Y');
INSERT INTO `ampur` VALUES ('830', '6903', 'โซ่พิสัย', '69', 'Y');
INSERT INTO `ampur` VALUES ('831', '6904', 'ท่าบ่อ', '69', 'Y');
INSERT INTO `ampur` VALUES ('832', '6905', 'บึงกาฬ', '69', 'Y');
INSERT INTO `ampur` VALUES ('833', '6906', 'บึงโขลงหลง', '69', 'Y');
INSERT INTO `ampur` VALUES ('834', '6907', 'ปากคาด', '69', 'Y');
INSERT INTO `ampur` VALUES ('835', '6908', 'พรเจริญ', '69', 'Y');
INSERT INTO `ampur` VALUES ('836', '6909', 'โพนพิสัย', '69', 'Y');
INSERT INTO `ampur` VALUES ('837', '6910', 'ศรีเชียงใหม่', '69', 'Y');
INSERT INTO `ampur` VALUES ('838', '6911', 'ศรีวิไล', '69', 'Y');
INSERT INTO `ampur` VALUES ('839', '6912', 'สังคม', '69', 'Y');
INSERT INTO `ampur` VALUES ('840', '6913', 'สระใคร่', '69', 'Y');
INSERT INTO `ampur` VALUES ('841', '6914', 'บุ่งคล้า', '69', 'Y');
INSERT INTO `ampur` VALUES ('842', '6915', 'รัตนวาปี', '69', 'Y');
INSERT INTO `ampur` VALUES ('843', '6916', 'เฝ้าไร่', '69', 'Y');
INSERT INTO `ampur` VALUES ('844', '6917', 'โพธิ์ตาก', '69', 'Y');
INSERT INTO `ampur` VALUES ('845', '7001', 'เมืองหนองบัวลำภู', '70', 'Y');
INSERT INTO `ampur` VALUES ('846', '7002', 'นากลาง', '70', 'Y');
INSERT INTO `ampur` VALUES ('847', '7003', 'โนนสัง', '70', 'Y');
INSERT INTO `ampur` VALUES ('848', '7004', 'ศรีบุญเรือง', '70', 'Y');
INSERT INTO `ampur` VALUES ('849', '7005', 'สุวรรณคูหา', '70', 'Y');
INSERT INTO `ampur` VALUES ('850', '7006', 'นาวัง', '70', 'Y');
INSERT INTO `ampur` VALUES ('851', '7101', 'เมืองอ่างทอง', '71', 'Y');
INSERT INTO `ampur` VALUES ('852', '7102', 'ไชโย', '71', 'Y');
INSERT INTO `ampur` VALUES ('853', '7103', 'ป่าโมก', '71', 'Y');
INSERT INTO `ampur` VALUES ('854', '7104', 'โพธิ์ทอง', '71', 'Y');
INSERT INTO `ampur` VALUES ('855', '7105', 'วิเศษชัยชาญ', '71', 'Y');
INSERT INTO `ampur` VALUES ('856', '7106', 'สามโก้', '71', 'Y');
INSERT INTO `ampur` VALUES ('857', '7107', 'แสวงหา', '71', 'Y');
INSERT INTO `ampur` VALUES ('858', '7201', 'เมืองอำนาจเจริญ', '72', 'Y');
INSERT INTO `ampur` VALUES ('859', '7202', 'ชานุมาน', '72', 'Y');
INSERT INTO `ampur` VALUES ('860', '7203', 'ปทุมราชวงศา', '72', 'Y');
INSERT INTO `ampur` VALUES ('861', '7204', 'พนา', '72', 'Y');
INSERT INTO `ampur` VALUES ('862', '7205', 'เสนางคนิคม', '72', 'Y');
INSERT INTO `ampur` VALUES ('863', '7206', 'หัวตะพาน', '72', 'Y');
INSERT INTO `ampur` VALUES ('864', '7207', 'ลืออำนาจ', '72', 'Y');
INSERT INTO `ampur` VALUES ('865', '7301', 'เมืองอุดรธานี', '73', 'Y');
INSERT INTO `ampur` VALUES ('866', '7302', 'กู่แก้ว', '73', 'Y');
INSERT INTO `ampur` VALUES ('867', '7303', 'กุดจับ', '73', 'Y');
INSERT INTO `ampur` VALUES ('868', '7304', 'กุมภวาปี', '73', 'Y');
INSERT INTO `ampur` VALUES ('869', '7305', 'ไชยวาน', '73', 'Y');
INSERT INTO `ampur` VALUES ('870', '7306', 'ทุ่งฝน', '73', 'Y');
INSERT INTO `ampur` VALUES ('871', '7307', 'นายูง', '73', 'Y');
INSERT INTO `ampur` VALUES ('872', '7308', 'น้ำโสม', '73', 'Y');
INSERT INTO `ampur` VALUES ('873', '7309', 'โนนสะอาด', '73', 'Y');
INSERT INTO `ampur` VALUES ('874', '7310', 'บ้านดุง', '73', 'Y');
INSERT INTO `ampur` VALUES ('875', '7311', 'บ้านผือ', '73', 'Y');
INSERT INTO `ampur` VALUES ('876', '7312', 'พิบูลย์รักษ์', '73', 'Y');
INSERT INTO `ampur` VALUES ('877', '7313', 'เพ็ญ', '73', 'Y');
INSERT INTO `ampur` VALUES ('878', '7314', 'วังสามหมอ', '73', 'Y');
INSERT INTO `ampur` VALUES ('879', '7315', 'ศรีธาตุ', '73', 'Y');
INSERT INTO `ampur` VALUES ('880', '7316', 'สร้างคอม', '73', 'Y');
INSERT INTO `ampur` VALUES ('881', '7317', 'หนองวัวซอ', '73', 'Y');
INSERT INTO `ampur` VALUES ('882', '7318', 'หนองหาน', '73', 'Y');
INSERT INTO `ampur` VALUES ('883', '7319', 'หนองแสง', '73', 'Y');
INSERT INTO `ampur` VALUES ('884', '7320', 'ประจักษ์ศิลปาคาม', '73', 'Y');
INSERT INTO `ampur` VALUES ('885', '7401', 'เมืองอุตรดิตถ์', '74', 'Y');
INSERT INTO `ampur` VALUES ('886', '7402', 'ตรอน', '74', 'Y');
INSERT INTO `ampur` VALUES ('887', '7403', 'ทองแสนขัน', '74', 'Y');
INSERT INTO `ampur` VALUES ('888', '7404', 'ท่าปลา', '74', 'Y');
INSERT INTO `ampur` VALUES ('889', '7405', 'น้ำปาด', '74', 'Y');
INSERT INTO `ampur` VALUES ('890', '7406', 'บ้านโคก', '74', 'Y');
INSERT INTO `ampur` VALUES ('891', '7407', 'พิชัย', '74', 'Y');
INSERT INTO `ampur` VALUES ('892', '7408', 'ฟากท่า', '74', 'Y');
INSERT INTO `ampur` VALUES ('893', '7409', 'ลับแล', '74', 'Y');
INSERT INTO `ampur` VALUES ('894', '7501', 'เมืองอุทัยธานี', '75', 'Y');
INSERT INTO `ampur` VALUES ('895', '7502', 'ทัพทัน', '75', 'Y');
INSERT INTO `ampur` VALUES ('896', '7503', 'บ้านไร่', '75', 'Y');
INSERT INTO `ampur` VALUES ('897', '7504', 'ลานสัก', '75', 'Y');
INSERT INTO `ampur` VALUES ('898', '7505', 'สว่างอารมณ์', '75', 'Y');
INSERT INTO `ampur` VALUES ('899', '7506', 'หนองขาหย่าง', '75', 'Y');
INSERT INTO `ampur` VALUES ('900', '7507', 'หนองฉาง', '75', 'Y');
INSERT INTO `ampur` VALUES ('901', '7508', 'ห้วยคต', '75', 'Y');
INSERT INTO `ampur` VALUES ('902', '7601', 'เมืองอุบลราชธานี', '76', 'Y');
INSERT INTO `ampur` VALUES ('903', '7602', 'กุดข้าวปุ้น', '76', 'Y');
INSERT INTO `ampur` VALUES ('904', '7603', 'เขมราฐ', '76', 'Y');
INSERT INTO `ampur` VALUES ('905', '7604', 'เขื่องใน', '76', 'Y');
INSERT INTO `ampur` VALUES ('906', '7605', 'โขงเจียม', '76', 'Y');
INSERT INTO `ampur` VALUES ('907', '7606', 'เดชอุดม', '76', 'Y');
INSERT INTO `ampur` VALUES ('908', '7607', 'ตระการพืชผล', '76', 'Y');
INSERT INTO `ampur` VALUES ('909', '7608', 'ตาลสุม', '76', 'Y');
INSERT INTO `ampur` VALUES ('910', '7609', 'ทุ่งศรีอุดม', '76', 'Y');
INSERT INTO `ampur` VALUES ('911', '7610', 'นาจะหลวย', '76', 'Y');
INSERT INTO `ampur` VALUES ('912', '7611', 'น้ำยืน', '76', 'Y');
INSERT INTO `ampur` VALUES ('913', '7612', 'บุณฑริก', '76', 'Y');
INSERT INTO `ampur` VALUES ('914', '7613', 'พิบูลมังสาหาร', '76', 'Y');
INSERT INTO `ampur` VALUES ('915', '7614', 'โพธิ์ไทร', '76', 'Y');
INSERT INTO `ampur` VALUES ('916', '7615', 'ม่วงสามสิบ', '76', 'Y');
INSERT INTO `ampur` VALUES ('917', '7616', 'เหล่าเสือโก้ก', '76', 'Y');
INSERT INTO `ampur` VALUES ('918', '7617', 'วารินชำราบ', '76', 'Y');
INSERT INTO `ampur` VALUES ('919', '7618', 'ศรีเมืองใหม่', '76', 'Y');
INSERT INTO `ampur` VALUES ('920', '7619', 'สำโรง', '76', 'Y');
INSERT INTO `ampur` VALUES ('921', '7620', 'สิรินธร', '76', 'Y');
INSERT INTO `ampur` VALUES ('922', '7621', 'นาเยีย', '76', 'Y');
INSERT INTO `ampur` VALUES ('923', '7622', 'นาตาล', '76', 'Y');
INSERT INTO `ampur` VALUES ('924', '7623', 'สว่างวีระวงศ์', '76', 'Y');
INSERT INTO `ampur` VALUES ('925', '7624', 'น้ำขุ่น', '76', 'Y');
INSERT INTO `ampur` VALUES ('926', '7625', 'ดอนมดแดง', '76', 'Y');

-- ----------------------------
-- Table structure for class_position
-- ----------------------------
DROP TABLE IF EXISTS `class_position`;
CREATE TABLE `class_position` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `class_position_type_name` varchar(200) DEFAULT NULL,
  `class_position_shortname` varchar(2) DEFAULT NULL,
  `class_position_type_group_name` varchar(2) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class_position
-- ----------------------------
INSERT INTO `class_position` VALUES ('1', 'ระดับต้น(Primary Level)', 'S1', 'S', 'Y');
INSERT INTO `class_position` VALUES ('2', 'ระดับสูง(Higher Level)', 'S2', 'S', 'Y');
INSERT INTO `class_position` VALUES ('3', 'ระดับต้น(Primary Level)', 'M1', 'M', 'Y');
INSERT INTO `class_position` VALUES ('4', 'ระดับสูง(Higher Level)', 'M2', 'M', 'Y');
INSERT INTO `class_position` VALUES ('5', 'ระดับปฏิบัติการ(Practitioner Level)', 'K1', 'K', 'Y');
INSERT INTO `class_position` VALUES ('6', 'ระดับชำนาญการ(Professional Level)', 'K2', 'K', 'Y');
INSERT INTO `class_position` VALUES ('7', 'ระดับชำนาญการพิเศษ(Senior Professional Level)', 'K3', 'K', 'Y');
INSERT INTO `class_position` VALUES ('8', 'ระดับเชี่ยวชาญ(Expert Level)', 'K4', 'K', 'Y');
INSERT INTO `class_position` VALUES ('9', 'ระดับทรงคุณวุฒิ(Advisory Level)', 'K5', 'K', 'Y');
INSERT INTO `class_position` VALUES ('10', 'ระดับปฏิบัติงาน(Operational level)', 'O1', 'O', 'Y');
INSERT INTO `class_position` VALUES ('11', 'ระดับชำนาญงาน(Experienced level)', 'O2', 'O', 'Y');
INSERT INTO `class_position` VALUES ('12', 'ระดับอาวุโส(Senior Level)', 'O3', 'O', 'Y');
INSERT INTO `class_position` VALUES ('13', 'ระดับทักษะพิเศษ(Highly Skilled Level)', 'O4', 'O', 'Y');

-- ----------------------------
-- Table structure for competency
-- ----------------------------
DROP TABLE IF EXISTS `competency`;
CREATE TABLE `competency` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `competency_name` varchar(150) DEFAULT NULL,
  `competency_type` varchar(1) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of competency
-- ----------------------------

-- ----------------------------
-- Table structure for competency_type
-- ----------------------------
DROP TABLE IF EXISTS `competency_type`;
CREATE TABLE `competency_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `competency_type_name` varchar(150) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of competency_type
-- ----------------------------
INSERT INTO `competency_type` VALUES ('1', 'สมรรถนะหลักรายบุคคล', 'Y');
INSERT INTO `competency_type` VALUES ('2', 'สมรรถนะเฉพาะรายบุคคล', 'Y');
INSERT INTO `competency_type` VALUES ('3', 'สมรรถนะเพื่อการพัฒนา', 'Y');

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_name` varchar(200) DEFAULT NULL,
  `dep_owner_course` varchar(150) DEFAULT NULL,
  `place_course` varchar(150) DEFAULT NULL,
  `day_course_start` date DEFAULT NULL,
  `day_course_end` date DEFAULT NULL,
  `person_target_course` varchar(255) DEFAULT NULL,
  `num_person_join_project` int(4) DEFAULT NULL,
  `department_level` varchar(1) DEFAULT NULL,
  `hr_development_type` varchar(1) DEFAULT NULL,
  `copetency` varchar(150) DEFAULT NULL,
  `skill` varchar(80) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hr_development_type` (`hr_development_type`),
  KEY `department_level` (`department_level`),
  CONSTRAINT `department_level` FOREIGN KEY (`department_level`) REFERENCES `department_level` (`department_level_name`),
  CONSTRAINT `hr_develop_type` FOREIGN KEY (`hr_development_type`) REFERENCES `hr_development_type` (`hr_develop_typename`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course
-- ----------------------------

-- ----------------------------
-- Table structure for course--
-- ----------------------------
DROP TABLE IF EXISTS `course--`;
CREATE TABLE `course--` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `person` varchar(200) DEFAULT NULL,
  `course_name` text,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=261 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course--
-- ----------------------------
INSERT INTO `course--` VALUES ('1', 'น.ส.สุกันยา ศิรินินทศักดิ์', 'โครงการอบรมภาษาจีนเพื่องานสุขภาพจิตระหว่างประเทศ', 'Y');
INSERT INTO `course--` VALUES ('2', 'นายเทิดพงศ์  เดชา', 'ประชุมเพื่อทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพ (Career Path)', 'Y');
INSERT INTO `course--` VALUES ('3', 'สายพิณ ทองสม', 'ประชุมเพื่อทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพ (Career Path)', 'Y');
INSERT INTO `course--` VALUES ('4', 'นางรัตนาพร  สุวรรณวงค์', 'ประชุมเพื่อทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพ (Career Path)', 'Y');
INSERT INTO `course--` VALUES ('5', 'นางสยาภรณ์ เดชดี', 'ประชุมเพื่อทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพ (Career Path)', 'Y');
INSERT INTO `course--` VALUES ('6', 'นางศศิธร  เก็มเส็น', 'ประชุมการดูแลผู้สูงอายุภาวะสมองเสื่อมตามแนวคิดฮิวแมนจูด', 'Y');
INSERT INTO `course--` VALUES ('7', 'นางประไพพรรณ  นิลวงศ์', 'ประชุมการปฏิบัติงานด้านจิตวิทยาคลินิก', 'Y');
INSERT INTO `course--` VALUES ('8', 'นายอนล  สุจริตธุรการ', 'ประชุมติดตามความก้าวหน้าโครงการวิจัยร่วม', 'Y');
INSERT INTO `course--` VALUES ('9', 'นางวิภา  สุวรรณรัตน์', 'ประชุมการเยียวยาจิตใจและพัฒนาวิชาการการดำเนินงานเพื่อเฝ้าระวังปัญหาสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('10', 'นางสุจิรา  เนาวรัตน์', 'ประชุมเพื่อทบทวนหลักสูตรการอบรมแพทย์เพื่อเพิ่มความรู้ ความสามารถ สาขาเวชศาสตร์ป้องกัน แขนงสุขภาพจิตชุมชน ', 'Y');
INSERT INTO `course--` VALUES ('11', 'นางสาวภัททิรา  บัวจันทร์', 'ประชุมคณะกรรมการการพัฒนาหลักสูตรการพยาบาลเฉพาะทาง กรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('12', 'นางสาวกฤตยา  บางเหลือ', 'อบรมสัมนาหลักสูตรการเป็นข้าราชการที่ดี', 'Y');
INSERT INTO `course--` VALUES ('13', 'นางสุจิรา  เนาวรัตน์', 'ประชุมคณะกรรมการขับเคลื่อนการบังคับใช้พระราชบัญญัติสุขภาพจิต พ.ศ. 2551', 'Y');
INSERT INTO `course--` VALUES ('14', 'นางสุจิรา  เนาวรัตน์', 'ประชุมเชิงปฏิบัติการเรื่องตัวชี้วัดตามคำรับรองการปฏิบัติราชการของหน่วยงานในสังกัดกรมสุขภาพจิต ประจำปีงบประมาณ 2560', 'Y');
INSERT INTO `course--` VALUES ('15', 'นางสยาภรณ์  เดชดี', 'ประชุมความท้าทาย พยาบาลยุคไทยแลนด์ 4.0', 'Y');
INSERT INTO `course--` VALUES ('16', 'นางสุมาลี  ผลพิบูลย์', 'ประชุมความท้าทาย พยาบาลยุคไทยแลนด์ 4.0', 'Y');
INSERT INTO `course--` VALUES ('17', 'นางสาวกันตวรรณ  มากวิจิต', 'ประชุมความท้าทาย พยาบาลยุคไทยแลนด์ 4.0', 'Y');
INSERT INTO `course--` VALUES ('18', 'นางสาวจันทร์จิรา  ธวัชสุวรรณ', 'ประชุมเชิงปฏิบัติการเรื่องตัวชี้วัดตามคำรับรองการปฏิบัติราชการของหน่วยงานในสังกัดกรมสุขภาพจิต ประจำปีงบประมาณ 2560', 'Y');
INSERT INTO `course--` VALUES ('19', 'นางกัณณวัณฑ์  สกูลหรัง', 'ประชุมเชิงปฏิบัติการเรื่องตัวชี้วัดตามคำรับรองการปฏิบัติราชการของหน่วยงานในสังกัดกรมสุขภาพจิต ประจำปีงบประมาณ 2560', 'Y');
INSERT INTO `course--` VALUES ('20', 'นางนิบัดดรียะ  จิงา', 'ประชุมผู้บริหารและคณะกรรมการเขตสุขภาพที่ 12', 'Y');
INSERT INTO `course--` VALUES ('21', 'นางสุมาลี  ผลพิบูลย์', 'โครงการเสรมสร้างความรู้การบริหารทรัพยากรบุคคลภาครัฐ ด้านการอุธรณ์ร้องทุกข์และเทคนิคการสอบสวนทางวินัย', 'Y');
INSERT INTO `course--` VALUES ('22', 'นางรัตนาพร  สุวรรณวงค์', 'โครงการเสรมสร้างความรู้การบริหารทรัพยากรบุคคลภาครัฐ ด้านการอุธรณ์ร้องทุกข์และเทคนิคการสอบสวนทางวินัย', 'Y');
INSERT INTO `course--` VALUES ('23', 'นายบรรณวิชญ์  เพชรสุวรรณ', 'ประชุมเชิงปฏิบัติเพื่อขับเคลื่อนการพัฒนาระบบบริการสุขภาพจิตและจิตเวช', 'Y');
INSERT INTO `course--` VALUES ('24', 'นางประไพพรรณ  นิลวงศ์', 'ประชุมคณะกรรมการชมรมนักจิตวิทยาคลินิก ครั้งที่ 1/2560', 'Y');
INSERT INTO `course--` VALUES ('25', 'นางภัชรินทร์  เฉลิมบุญ', 'ประชุม FERCAPINTERNATIONAL CONFERENCE', 'Y');
INSERT INTO `course--` VALUES ('26', 'นางมณฑา  ขาวเขียว', 'โครงการประชุมเชิงปฏิบัติการเรื่องความรู้ทางกฏหมายด้านพัสดุและแนวทางป้องกันผลประโยชน์ทับซ้อน', 'Y');
INSERT INTO `course--` VALUES ('27', 'นางสาวจันทร์จิรา  ธวัชสุวรรณ', 'โครงการประชุมเชิงปฏิบัติการเรื่องความรู้ทางกฏหมายด้านพัสดุและแนวทางป้องกันผลประโยชน์ทับซ้อน', 'Y');
INSERT INTO `course--` VALUES ('28', 'นางสุจิรา  เนาวรัตน์', 'ประชุมเชิงปฏิบัติการเรื่องเกณฑ์รางวัลบริการภาครัฐแห่งชาติ ประจำปี พ.ศ. 2560', 'Y');
INSERT INTO `course--` VALUES ('29', 'นางสยาภรณ์  เดชดี', 'ประชุมเชิงปฏิบัติการการสร้างความเข้มแข็งเครือข่ายผู้บริหารทางการพยาบาล', 'Y');
INSERT INTO `course--` VALUES ('30', 'นางศศิธร  เก็มเส็น', 'ประชุมการขับเคลื่อนและพัฒนาสมรรถนะบุคคลากรสุขภาพจิตในการส่งเสริมสุขภาพจิตผู้สูงอายุ', 'Y');
INSERT INTO `course--` VALUES ('31', 'นางวิภา  สุวรรณรัตน์', 'ประชุม SERVICE PLAN', 'Y');
INSERT INTO `course--` VALUES ('32', 'นางสาวกันตวรรณ  มากวิจิต', 'อบรมหลักสูตรการบำบัดสุกในชุมชน', 'Y');
INSERT INTO `course--` VALUES ('33', 'นางกัญญา  วิจิตพันธ์', 'อบรมหลักสูตรการบำบัดสุกในชุมชน', 'Y');
INSERT INTO `course--` VALUES ('34', 'นางสาวยุวดี  ทองหนูนุ้ย', 'ประชุมเชิงปฏิบัติการ การพัฒนาศักยภาพด้านวิชาการแก่ผู้บริหารจัดการระบบการป้อนกันและแก้ไขปัญหายาเสพติดและสารเสพติด', 'Y');
INSERT INTO `course--` VALUES ('35', 'นางสาวรักษิณา  พรมทองบุญ', 'ประชุมเชิงปฏิบัติการเรื่อง COGNITIRE BEHAVIOR THEREPY FOR AUTISM SPECTRUM DISORDER', 'Y');
INSERT INTO `course--` VALUES ('36', 'นางประกอบ  ขุนทอง', 'ประชุมชี้แจงแนวทางการดำเนินงานตามแผนยุทธศาสตร์กรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('37', 'นางกัณณวัณฑ์  สกูลหรัง', 'อบรมหลักสูตรการพัฒนาศักยภาพทางการบริหารการเงินการคลังภาครัฐและการจัดการความขัดแย้ง', 'Y');
INSERT INTO `course--` VALUES ('38', 'นางสาวนัยนา  ทองสุวรรณ์', 'ประชุมชี้แจงแนวทางการดำเนินงานตามแผนยุทธศาสตร์กรมสุขภาพจิต ยุทธศาสตร์ที่ 3', 'Y');
INSERT INTO `course--` VALUES ('39', 'นายศักดิ์สิทธิ์  สนิทวงศ์ ณ อยุธยา', 'อบรมวิทยาการหลัก TOT ', 'Y');
INSERT INTO `course--` VALUES ('40', 'นางสาวนิยม  ชูทะวงศ์', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course--` VALUES ('41', 'นางสาวสายฝน  นิลดำ', 'โครงการอบรมเชิงปฏิบัติการ การจัดซื้อจัดจ้างด้วยวิธีตลาดอิเล็กทรอนิกส์', 'Y');
INSERT INTO `course--` VALUES ('42', 'นางประกอบ  ขุนทอง', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพในการจัดทำหลักสูตรอบรมแบบเน้นผลสัมลัพธ์', 'Y');
INSERT INTO `course--` VALUES ('43', 'นางกนกชนก  การะเกษร', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพในการจัดทำหลักสูตรอบรมแบบเน้นผลสัมลัพธ์', 'Y');
INSERT INTO `course--` VALUES ('44', 'นางสุมาลี  ผลพิบูลย์', 'ประชุมเชิงปฏิบัติการการพัฒนาสมรรถนะผู้บริหารการพยาบาลสู่ความเป็นเลิศด้านการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('45', 'นางสาวถนอมรัตน์  หุตะจูฑะ', 'โครงการพัฒนาระบบรายงานความเป็นเลิศของหน่วยงานในสังกัดกรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('46', 'นางนิบัดดรียะ  จิงา', 'ประชุมเชิงปฏิบัติการการขับเคลื่อนการพัฒนาระบบบริการ SERVEICE PLAN สาขาจิตเวช', 'Y');
INSERT INTO `course--` VALUES ('47', 'นายวิชัย  ลิยสิทธิ์ดำรงกุล', 'อบรมหลักสูตรการพัฒนาศักยภาพทางการบริหารการเงินการคลังภาครัฐและการจัดการความขัดแย้ง', 'Y');
INSERT INTO `course--` VALUES ('48', 'นางวชิราภรณ์  วงศ์วิวัฒน์', 'อบรมการพัฒนาบุคลากรเครือข่ายด้านภาษาอังกฤษเพื่อการสื่อสารประชาคมอาเซียน', 'Y');
INSERT INTO `course--` VALUES ('49', 'นางพรทิพย์  กระจ่างพัฒน์วงษ์', 'อบรมเชิงปฏิบัติการหลักสูตรกระบวนการนิติจิตเวชสำหรับทีมสหวิชาชีพ', 'Y');
INSERT INTO `course--` VALUES ('50', 'นายบรรณวิชญ์  เพชรสุวรรณ', 'อบรมหลักสูตรการเยียวยาจิตใจผู้ได้รับผลกระทบ', 'Y');
INSERT INTO `course--` VALUES ('51', 'นางวิภา  สุวรรณรัตน์', 'ประชุมผู้บริหารและคณะกรรมการเขตสุขภาพที่ 12', 'Y');
INSERT INTO `course--` VALUES ('52', 'นางจงจิต  ผิวพรรณ', 'การเขียนหนังสือราชการ', 'Y');
INSERT INTO `course--` VALUES ('53', 'นางรัศมี  บุญไทย', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาแนวทางการจักกิจกรรมและการประชาสัมพันธ์ งานห้องสมุด', 'Y');
INSERT INTO `course--` VALUES ('54', 'นายชญานนท์  สุวรรณชัย', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาแนวทางการจักกิจกรรมและการประชาสัมพันธ์ งานห้องสมุด', 'Y');
INSERT INTO `course--` VALUES ('55', 'นางวรางคณา  มุสิกะไชย', 'ประชุมการพัฒนาแนวเวชปฏิบัติรายโรคทางจิตเวชตามประเด็นความเป็นเลิศของหน่วยงานในกรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('56', 'นางวิภา  สุวรรณรัตน์', 'อบรมการพัฒนาบุคลากรเครือข่ายด้านภาษาอังกฤษเพื่อการสื่อสารประชาคมดาเซียน', 'Y');
INSERT INTO `course--` VALUES ('57', 'นางสาวพัชริดา  ราชสุข', 'ประชุมเรื่องบูรณาการห้องปฏิบัติการสมาชิกแผนการทดสอบความชำนาญและผู้มีส่วนได้ส่วนเสียด้านการตรวจสารเสพติด', 'Y');
INSERT INTO `course--` VALUES ('58', 'นางกัณณวัณฑ์  สกูลหรัง', 'อบรมหลักสูตรการพัฒนาศักยภาพทางการบริหารการเงินการคลังภาครัฐและการจัดการความขัดแย้ง', 'Y');
INSERT INTO `course--` VALUES ('59', 'นางสุจิรา  เนาวรัตน์', 'อบรมหลักสูตรการพัฒนาศักยภาพทางการบริหารการเงินการคลังภาครัฐและการจัดการความขัดแย้ง', 'Y');
INSERT INTO `course--` VALUES ('60', 'นางสุจิรา  เนาวรัตน์', 'โครงการอบรมแพทย์เพื่อเพิ่มพูนความรู้ทักษะแพทย์ฯ', 'Y');
INSERT INTO `course--` VALUES ('61', 'นางสาวกันตวรรณ  มากวิจิต', 'ประชุมเชิงปฏิบัติการการพัฒนาสมรรถนะผู้บริหารการพยาบาลสู่ความเป็นเลิศด้านการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('62', 'นางสาวเขมวันต์  ไมตรีจรรย์', 'ประชุมเชิงปฏิบัติการการพัฒนาสมรรถนะผู้บริหารการพยาบาลสู่ความเป็นเลิศด้านการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('63', 'นางสยาภรณ์  เดชดี', 'ประชุมเชิงปฏิบัติการการพัฒนาสมรรถนะผู้บริหารการพยาบาลสู่ความเป็นเลิศด้านการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('64', 'นางสาวมีนา  นุ้ยแนบ', 'ประชุมเชิงปฏิบัติการการพัฒนาสมรรถนะผู้บริหารการพยาบาลสู่ความเป็นเลิศด้านการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('65', 'นางกนกชนก  การะเกษร', 'ประชุมเชิงปฏิบัติการการพัฒนาสมรรถนะผู้บริหารการพยาบาลสู่ความเป็นเลิศด้านการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('66', 'นางสุมาลี  ผลพิบูลย์', 'ประชุมเชิงปฏิบัติการการพัฒนาสมรรถนะผู้บริหารการพยาบาลสู่ความเป็นเลิศด้านการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('67', 'นางสาวพรชนก  สุวรรณพรรค', 'ประชุมเชิงปฏิบัติการการพัฒนาสมรรถนะผู้บริหารการพยาบาลสู่ความเป็นเลิศด้านการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('68', 'นางสาวถนอมรัตน์  หุตะจูฑะ', 'ประชุมโครงการพัฒนาศักยภาพเครือข่ายนักสื่อสารสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('69', 'นางสาวถาวรีย์  มากวิจิต', 'ประชุมเชิงปฏิบัติการการพัฒนาคุณภาพและวิเคราะห์ภาระงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('70', 'นางฐิตาพร  พูลแก้ว', 'ประชุมเชิงปฏิบัติการการพัฒนาคุณภาพและวิเคราะห์ภาระงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('71', 'นางสาวกัลยา  จันทร์ขาว', 'ประชุมเชิงปฏิบัติการการพัฒนาคุณภาพและวิเคราะห์ภาระงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('72', 'นางรัตนาพร  สุวรรณวงค์', 'ประชุมเชิงปฏิบัติการการพัฒนาคุณภาพและวิเคราะห์ภาระงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('73', 'นางพัทธนันท์  อินสะโร', 'ประชุมปฏิบัติการพัฒนาสักยภาพบุคลากรเพื่อดำเนินการยกระดังองค์กรสู่การเป้นองค์การแห่งการเรียนรู้โดยใช้การเทียบระดับ', 'Y');
INSERT INTO `course--` VALUES ('74', 'นายชญานนท์  สุวรรณชัย', 'อบรมหลักสูตร JVVA FOR NON-PROGAMMER', 'Y');
INSERT INTO `course--` VALUES ('75', 'นายวิชัย  ลิยสิทธิ์ดำรงกุล', 'ประชุมเชิงปฏิบัติการเรื่องการพัฒนาบุคลากรตามสายวิชาชีพเภสัชกรรม กรมสุขภาพจิต ครั้งที่ 1/2560', 'Y');
INSERT INTO `course--` VALUES ('76', 'นางจงจิต  ผิวพรรณ', 'โปรแกรมระบบสารบรรณอิเล็กทรอนิกส์', 'Y');
INSERT INTO `course--` VALUES ('77', 'นางสาวภัททิรา  บัวจันทร์', 'ประชุมเชิงปฏิบัติการพัฒนาศักยภาพบุคลากรเพื่อดำเนินการยกระดับองค์กร', 'Y');
INSERT INTO `course--` VALUES ('78', 'นางประไพพรรณ  นิลวงศ์', 'ประชุมเชิงปฏิบัติการพัฒนาศักยภาพบุคลากรเพื่อดำเนินการยกระดับองค์กร', 'Y');
INSERT INTO `course--` VALUES ('79', 'นางสยาภรณ์  เดชดี', 'ประชุมเพื่อวิเคราะห์ความต้องการกำลังคนตามภารงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('80', 'นางสุมาลี  ผลพิบูลย์', 'ประชุมเพื่อวิเคราะห์ความต้องการกำลังคนตามภารงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('81', 'นายวีระศักดิ์  บุญไทย', 'การอบรมหลักสูตร การผลิตสื่อและการใช้สื่อสังคมออนไลน์', 'Y');
INSERT INTO `course--` VALUES ('82', 'นางสาวจันทร์จิรา  ธวัชสุวรรณ', 'ประชุมเชิงปฏิบัติการเพื่อพัฒาระบบคุณภาพการบริหาจัดการภาครัฐของหน่วยงาน', 'Y');
INSERT INTO `course--` VALUES ('83', 'นางวรางคณา  มุสิกะไชย', 'ประชุมเชิงปฏิบัติการเพื่อพัฒาระบบคุณภาพการบริหาจัดการภาครัฐของหน่วยงาน', 'Y');
INSERT INTO `course--` VALUES ('84', 'นางสาวชัดเจน  จันทรพัฒน์', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาสมรรถนะในการเขียนและประเมินบทความวิชาการหลักสูตรก้าวหน้า', 'Y');
INSERT INTO `course--` VALUES ('85', 'นางศศิธร  เก็มเส็น', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนานักวิจัยหน้าใหม่ ครั้งที่ 2', 'Y');
INSERT INTO `course--` VALUES ('86', 'นางสาวจันทร์จิรา  ธวัชสุวรรณ', 'ประชุมเพื่อวิเคราะห์ความต้องการกำลังคนตามภารงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('87', 'นายชญานนท์  สุวรรณชัย', 'ประชุมเพื่อวิเคราะห์ความต้องการกำลังคนตามภารงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('88', 'นางสาวกฤตยา  บางเหลือ', 'ประชุมเพื่อวิเคราะห์ความต้องการกำลังคนตามภารงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('89', 'นางสาวประไพ  มณี', 'ประชุมเพื่อวิเคราะห์ความต้องการกำลังคนตามภารงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('90', 'นางสุมาลี  ผลพิบูลย์', 'ประชุมเพื่อติดตามผลการดำเนินงานระบบ CASEMIX ผู้ป่วยจิตเวช', 'Y');
INSERT INTO `course--` VALUES ('91', 'นางสาวพัชรนันท์  ไพโรจน์ศิริกุล', 'โครงการเพิ่มคุณภาพระบบการรักษาทางทันตกรรมมาตรฐาน HA/HPH', 'Y');
INSERT INTO `course--` VALUES ('92', 'นางสามพิมพ์ชนก  แซ่โล่', 'โครงการเพิ่มคุณภาพระบบการรักษาทางทันตกรรมมาตรฐาน HA/HPH', 'Y');
INSERT INTO `course--` VALUES ('93', 'นางประกอบ  ขุนทอง', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพด้านการจัดทำหลักสูตร', 'Y');
INSERT INTO `course--` VALUES ('94', 'นางกนกชนก  การะเกษร', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพด้านการจัดทำหลักสูตร', 'Y');
INSERT INTO `course--` VALUES ('95', 'นางสาวรักษิณา  พรมทองบุญ', 'ประชุมเพื่อติดตามและสรุปผลการดำเนินการฝึกอบรมหลักสูตร การปฏิบัติงานด้านจิตวิทยาคลินิก', 'Y');
INSERT INTO `course--` VALUES ('96', 'นางกัณณวัณฑ์  สกูลหรัง', 'ประชุมเชิงปฏิบัติการเตรียมความพร้อมการซ้อมแผนตอบโต้สถานการณ์ฉุกเฉิน', 'Y');
INSERT INTO `course--` VALUES ('97', 'นายชัยวัฒน์  พุทธัสโร', 'ประชุมเชิงปฏิบัติการเตรียมความพร้อมการซ้อมแผนตอบโต้สถานการณ์ฉุกเฉิน', 'Y');
INSERT INTO `course--` VALUES ('98', 'นายชญานนท์  สุวรรณชัย', 'อบรม JAVA SERVLET AND JSP FOR WEB FROGRAMING', 'Y');
INSERT INTO `course--` VALUES ('99', 'นางสาวถาวรีย์  มากวิจิต', 'โครงการพัฒนาศักยภาพบุคลากรในการปฏิบัติงานผ่านระบบ GFIMS ', 'Y');
INSERT INTO `course--` VALUES ('100', 'นางสาวกัญจนา  จันทร์ฉาย', 'โครงการพัฒนาศักยภาพบุคลากรในการปฏิบัติงานผ่านระบบ GFIMS ', 'Y');
INSERT INTO `course--` VALUES ('101', 'นางพัชรินทร์ ปลอดภัย', 'อบรมภาษาอังกฤษเพื่องานสุขภาพจิตระหว่างประเทศ ประจำปีงบประมาณ 2560', 'Y');
INSERT INTO `course--` VALUES ('102', 'นางสาวรักษิณา  พรมทองบุญ', 'อบรมภาษาอังกฤษเพื่องานสุขภาพจิตระหว่างประเทศ ประจำปีงบประมาณ 2560', 'Y');
INSERT INTO `course--` VALUES ('103', 'นางสาววันดี  นันท์วิฑิตพงศ์', 'การประยุกต์เครื่องมือบริหารในงานเภสัชกรรม ครั้งที่ 1', 'Y');
INSERT INTO `course--` VALUES ('104', 'นางวรางคณา  มุสิกะไชย', 'สัมนาวิชาการเรื่อง สุขด้วยสติ ทั้งองค์กรอย่างยั่งยืน', 'Y');
INSERT INTO `course--` VALUES ('105', 'นางประไพพรรณ  นิลวงศ์', 'สัมนาวิชาการเรื่อง สุขด้วยสติ ทั้งองค์กรอย่างยั่งยืน', 'Y');
INSERT INTO `course--` VALUES ('106', 'นายชัยวัฒน์  พุทธัสโร', 'อบรมเชิงปฏิบัติการ MERT', 'Y');
INSERT INTO `course--` VALUES ('107', 'นางเสาวณี  จุทอง', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course--` VALUES ('108', 'นายวิชัย  ลิขสิทธิ์ดำรงกุล', 'ประชุมเพื่อทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพและเส้นทางการฝึกอบรมข้าราชการ', 'Y');
INSERT INTO `course--` VALUES ('109', 'นางสยาภรณ์  เดชดี', 'ประชุมเพื่อทบทวนและหารือสรุปรายละเอียดการกำหนดความรู้ ทักษะและสมรรถนะสายงานพยาบาลวิชาชพีและพยาบาลเทคนิค', 'Y');
INSERT INTO `course--` VALUES ('110', 'นายชญานนท์  สุวรรณชัย', 'ประชุมทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพ', 'Y');
INSERT INTO `course--` VALUES ('111', 'นายเทิดพงษ์  เดชา', 'ประชุมทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพ', 'Y');
INSERT INTO `course--` VALUES ('112', 'นางสาวจันทร์จิรา  ธวัชสุวรรณ', 'ประชุมวิชาการรองผู้อำนวยการฝ่ายบริหาร', 'Y');
INSERT INTO `course--` VALUES ('113', 'นางสาวชฎีนาฏ  ใหม่วัด', 'Pharmacautical Car for Patients with Chronic Disease', 'Y');
INSERT INTO `course--` VALUES ('114', 'นางเมตตา  เลิศเกียรติรัชตะ', 'ประชุมเชิงปฏบัติการพัฒนาคู่มือปฏิบัติงานทีมช่วยเหลือเยียวยาจิตใจผู้ประสบภาวะวิกฤติ ฉบับปรับปรุง ระยะที่ 1', 'Y');
INSERT INTO `course--` VALUES ('115', 'นางกัณณวัณฑ์  สกูลหรัง', 'ประชุมเชิงปฏบัติการพัฒนาคู่มือปฏิบัติงานทีมช่วยเหลือเยียวยาจิตใจผู้ประสบภาวะวิกฤติ ฉบับปรับปรุง ระยะที่ 1', 'Y');
INSERT INTO `course--` VALUES ('116', 'นายชญานนท์  สุวรรณชัย', 'ประชุมเชิงปฏบัติการพัฒนาคู่มือปฏิบัติงานทีมช่วยเหลือเยียวยาจิตใจผู้ประสบภาวะวิกฤติ ฉบับปรับปรุง ระยะที่ 1', 'Y');
INSERT INTO `course--` VALUES ('117', 'นางสยาภรณ์  เดชดี', 'อบรมหลักสูตรการเสิรมสร้างทัศนคติที่ดีสำหรับผู้บริหารตามรอยเบื้องยุคลบาท', 'Y');
INSERT INTO `course--` VALUES ('118', 'นางสาวมีนา  นุ้ยแนบ', 'อบรมหลักสูตรการเสิรมสร้างทัศนคติที่ดีสำหรับผู้บริหารตามรอยเบื้องยุคลบาท', 'Y');
INSERT INTO `course--` VALUES ('119', 'นางสายพิณ  ทองสม', 'ประชุมทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพ', 'Y');
INSERT INTO `course--` VALUES ('120', 'นางสุมาลี  ผลพิบูลย์', 'อบรมหลักสูตรการพัฒนาศักยภาพทางการบริหารการเงินการคลังภาครัฐและการจัดการความขัดแย้ง', 'Y');
INSERT INTO `course--` VALUES ('121', 'นางสยาภรณ์  เดชดี', 'อบรมหลักสูตรการพัฒนาศักยภาพทางการบริหารการเงินการคลังภาครัฐและการจัดการความขัดแย้ง', 'Y');
INSERT INTO `course--` VALUES ('122', 'นางฐิตาพร  พูลแก้ว', 'อบรมให้ความรู้กฏหมายด้านการบริหารสัญญาการก่อสร้างและการจัดการที่ราชพัสดุ', 'Y');
INSERT INTO `course--` VALUES ('123', 'นางจงจิต  ผิวพรรณ', 'ทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพและเส้นทางการฝึกอบรมข้าราชการ', 'Y');
INSERT INTO `course--` VALUES ('124', 'นางรัตนาพร  สุวรรณวงค์', 'ทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพและเส้นทางการฝึกอบรมข้าราชการ', 'Y');
INSERT INTO `course--` VALUES ('125', 'นางสาวกัญจนา  จันทร์ฉาย', 'โครงการประชุมเชิงปฏิบัติการเพื่อจัดทำต้นทุนผลผลิตของกรมสุขภาพจิต ประจำปีงบประมาณ 2560', 'Y');
INSERT INTO `course--` VALUES ('126', 'นางสุภาพร  อินทร์สุวรรณโณ', 'ประชุมเชิงปฏิบัติการพัฒนาบุคลกากรสายวิชาชีพโภชนาการ', 'Y');
INSERT INTO `course--` VALUES ('127', 'นางมาลี  เกตุแก้ว', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพนักวิจัยเชิงคุณภาพ ปีงบประมาณ 2560', 'Y');
INSERT INTO `course--` VALUES ('128', 'นางสาวจุฑา  ปาตังคะโร', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพนักวิจัยเชิงคุณภาพ ปีงบประมาณ 2560', 'Y');
INSERT INTO `course--` VALUES ('129', 'นายอนล  สุจริตธุระการ', 'โครงการอบรมหลักสูตรสติบำบัด', 'Y');
INSERT INTO `course--` VALUES ('130', 'นางสายพิณ  ทองสม', 'โครงการอบรมหลักสูตรสติบำบัด', 'Y');
INSERT INTO `course--` VALUES ('131', 'นางสยาภรณ์  เดชดี', 'ประชุมเพื่อทบทวนการวิเคราะห์ความต้องการกำลังคนตามภาระงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('132', 'นางสุมาลี  ผลพิบูลย์', 'ประชุมเพื่อทบทวนการวิเคราะห์ความต้องการกำลังคนตามภาระงาน FTE', 'Y');
INSERT INTO `course--` VALUES ('133', 'นางกนกชนก  การะเกษร', 'ศึกษาดูงาน โครงการการพยาบาลวิกฤตสุขภาพจิตจากภัยพิบัติฯ กำลังพลทหารเรือ', 'Y');
INSERT INTO `course--` VALUES ('134', 'นางประกอบ  ขุนทอง', 'ศึกษาดูงาน โครงการการพยาบาลวิกฤตสุขภาพจิตจากภัยพิบัติฯ กำลังพลทหารเรือ', 'Y');
INSERT INTO `course--` VALUES ('135', 'นางสยาภรณ์  เดชดี', 'ประชุมเพื่อทบทวนแผนส่งเสริมความหน้าในอาชีพและเส้นทางการฝึกอบรมข้าราชการ', 'Y');
INSERT INTO `course--` VALUES ('136', 'นางสุมาลี  ผลพิบูลย์', 'ประชุมเพื่อทบทวนแผนส่งเสริมความหน้าในอาชีพและเส้นทางการฝึกอบรมข้าราชการ', 'Y');
INSERT INTO `course--` VALUES ('137', 'นายวิชัย  ลิขสิทธิ์ดำรงกุล', 'ประชุมวิชาการเรื่องการบริบาลเภสัชกรรมผู้ป่วยจิตเวช ประจำปี 2560', 'Y');
INSERT INTO `course--` VALUES ('138', 'นายเทิดพงษ์  เดชา', 'ความรู้และทักษะที่จำเป็นด้านกายภาพบำบัดในผู้ป่วยจิตเวช', 'Y');
INSERT INTO `course--` VALUES ('139', 'นางสาววรรณา  กิ้มเผ่า', 'ประชุมเชิงปฏิบัติการการแก้ไขปัญหายาเสพติด', 'Y');
INSERT INTO `course--` VALUES ('140', 'นางวิภา  สุวรรณรัตน์', 'ประชุมเชิงปฏิบัติการเพื่อสรุปผลการตรวจราชการนิเทศงาน', 'Y');
INSERT INTO `course--` VALUES ('141', 'นางกาญจน์ดี  แสงสงวน', 'ประชุมเชิงปฏิบัติการเพื่อสรุปผลการตรวจราชการนิเทศงาน', 'Y');
INSERT INTO `course--` VALUES ('142', 'นางวรรณี  ศิริทรางกูร', 'การพัฒนาสมรรถนะการพัฒนาการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('143', 'นางสาวพรชนก  สุวรรณพรรค', 'การพัฒนาสมรรถนะการพัฒนาการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('144', 'นางสาวชัดเจน  จันทรพัฒน์', 'การพัฒนาสมรรถนะการพัฒนาการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('145', 'นางสุมาลี  ผลพิบูลย์', 'การพัฒนาสมรรถนะการพัฒนาการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('146', 'นางสาวกันตวรรณ  มากวิจิต', 'การพัฒนาสมรรถนะการพัฒนาการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('147', 'นายนรา  หนูทองสุข', 'การพัฒนาสมรรถนะการพัฒนาการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('148', 'นางสยาภรณ์  เดชดี', 'การพัฒนาสมรรถนะการพัฒนาการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('149', 'นางเมตตา  เลิศเกียรติรัชตะ', 'ประชุมคณะทำงานดำเนินการด้านวิชาการเพื่อการจัดประชุมวิชาการสุขภาพจิตนานาชาติ ครั้งที่ 16 ปี 2560', 'Y');
INSERT INTO `course--` VALUES ('150', 'นางสุจิรา  เนาวรัตน์', 'นำส่งผู้ป่วยกลับภูมิลำเนาและเตรียมครอบครัว/ชุมชน ', 'Y');
INSERT INTO `course--` VALUES ('151', 'นายนพพร  ตันติรังสี', 'นำเสนอผลงานประชุมวิชาการสุขภาพจิตนานาชาติ', 'Y');
INSERT INTO `course--` VALUES ('152', 'นางสาวรักษิณา  พรมทองบุญ', 'อบรมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพนักจิตวิทยาคลินิกด้านาการใช้แบบทดสอบทางจิตวิทยาในวัยรุ่น', 'Y');
INSERT INTO `course--` VALUES ('153', 'นางวรรณี  ศิริทรางกูร', 'โครงการพัฒนาสมรรถนะด้านงานวิจัยและวิชาการ', 'Y');
INSERT INTO `course--` VALUES ('154', 'นางสาวกันตวรรณ  มากวิจิต', 'ประชุมเชิงปฏิบัติการพัฒนาแผนยุทธศาสตร์การบิรการปฐมภูมิ 4.0 พ.ศ. 2560-2579', 'Y');
INSERT INTO `course--` VALUES ('155', 'นางวชิราภรณ์  วงศ์วิวัฒน์', 'ประชุมเชิงปฏิบัติการพัฒนาแผนยุทธศาสตร์การบิรการปฐมภูมิ 4.0 พ.ศ. 2560-2579', 'Y');
INSERT INTO `course--` VALUES ('156', 'นายอนล  สุจริตธุระการ', 'การรวบรวมข้อมูลเชิงคุณภาพเพื่อการวิจัยและพัฒนางานบริบาลเภสัชกรรมปฐมภูมิ', 'Y');
INSERT INTO `course--` VALUES ('157', 'นางวรางคณา  มุสิกะไชย', 'การแลกเปลี่ยนเรียนรู้ผลการดำเนินการเพื่อยกระดับองค์กรสู่การเป็นองค์กรแห่งการเรียนรู้ของหน่วยงานในกรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('158', 'นางสุจิรา  เนาวรัตน์', 'นำส่งผู้ป่วยกลับภูมิลำเนาและเตรียมครอบครัว/ชุมชน ', 'Y');
INSERT INTO `course--` VALUES ('159', 'นางสาวกัลยา  จันทร์ขาว', 'ประชุมวิชาการสมาคมนักกำหนดอาหารแห่งประเทศไทย ประจำปี 2560', 'Y');
INSERT INTO `course--` VALUES ('160', 'นางสุดา  ยูทธโท', 'เตรียมครอบครัวผู้ป่วยและเครื่อข่ายสาธารณสุข จังหวัดสตูล', 'Y');
INSERT INTO `course--` VALUES ('161', 'นางประไพพรรณ  นิลวงศ์', 'ประชุมเพื่อติดตามและสรุปผลการดำเนินงานการฝึกอบรมหลักสูตร การปฏิบัติงานด้านจิตวิทยาคลินิก', 'Y');
INSERT INTO `course--` VALUES ('162', 'นางวิภา  สุวรรณรัตน์', 'สรุปผลการตรวจราชการงานสุขภาพจิตรอบที่ 1', 'Y');
INSERT INTO `course--` VALUES ('163', 'นายนพพร  ตันติรังสี', 'ประชุมเชิงปฏิบัติการเตรียมความพร้อมรับแผนตอบโต้สถานการณ์ฉุกเฉินและสาธารณภัย', 'Y');
INSERT INTO `course--` VALUES ('164', 'นางกัณณวัณฑ์  สกูลหรัง', 'ประชุมเชิงปฏิบัติการเตรียมความพร้อมรับแผนตอบโต้สถานการณ์ฉุกเฉินและสาธารณภัย', 'Y');
INSERT INTO `course--` VALUES ('165', 'นางวิภา  สุวรรณรัตน์', 'ประชุมเชิงปฏิบัติการเตรียมความพร้อมรับแผนตอบโต้สถานการณ์ฉุกเฉินและสาธารณภัย', 'Y');
INSERT INTO `course--` VALUES ('166', 'นางประกอบ  ขุนทอง', 'นิเทศติดตามและการให้การช่วยเหลือแก่เครือข่ายในพื้นที่', 'Y');
INSERT INTO `course--` VALUES ('167', 'นางสาวภัททิรา  บัวจันทร์', 'อบรมหลักสูตรผู้บริหารการสาธารณสุขระดับต้น รุ่นที่ 27 ปีงบประมาณ 2560', 'Y');
INSERT INTO `course--` VALUES ('168', 'นางกัณณวัณฑ์  สกูลหรัง', 'การซ้อมแผนบรรเทาสาธารณภัยเพื่อจัดทำแนวทางการประสานการตอบสนองการบรรเทาสาธารณภัยในจังหวัดชายแดนใต้', 'Y');
INSERT INTO `course--` VALUES ('169', 'นางสาวถนอมรัตน์  หุตะจูฑะ', 'การซ้อมแผนบรรเทาสาธารณภัยเพื่อจัดทำแนวทางการประสานการตอบสนองการบรรเทาสาธารณภัยในจังหวัดชายแดนใต้', 'Y');
INSERT INTO `course--` VALUES ('170', 'นางเมตตา  เลิศเกียรติรัชตะ', 'การซ้อมแผนบรรเทาสาธารณภัยเพื่อจัดทำแนวทางการประสานการตอบสนองการบรรเทาสาธารณภัยในจังหวัดชายแดนใต้', 'Y');
INSERT INTO `course--` VALUES ('171', 'นางนิบัดดรียะ  จิงา', 'นิเทศติดตามประเมินผลเครือข่ายแบบบูรณาการในพื้นที่ ปี 60', 'Y');
INSERT INTO `course--` VALUES ('172', 'นางสาวกันตวรรณ  มากวิจิต', 'นิเทศติดตามประเมินผลเครือข่ายแบบบูรณาการในพื้นที่ ปี 60', 'Y');
INSERT INTO `course--` VALUES ('173', 'นางกาญจน์ดี  แสงสงวน', 'นิเทศติดตามประเมินผลเครือข่ายแบบบูรณาการในพื้นที่ ปี 60', 'Y');
INSERT INTO `course--` VALUES ('174', 'นางอารี  เงารังษี', 'นิเทศติดตามประเมินผลเครือข่ายแบบบูรณาการในพื้นที่ ปี 60', 'Y');
INSERT INTO `course--` VALUES ('175', 'นายบรรณวิชญ์  เพชรสุวรรณ', 'นิเทศติดตามและการให้การช่วยเหลือเครือข่ายในพื้นที่ ประจำปี 2560', 'Y');
INSERT INTO `course--` VALUES ('176', 'นางสุดา  ยุทธโท', 'ร่วมกิจกรรมรณรงค์การคัดกรองและอบรมให้ความรู้วิธีกำจัดความเครียดแก่ผู้ที่มีความเสี่ยงด้านจิตเวชและผู้ป่วยจิตเวช', 'Y');
INSERT INTO `course--` VALUES ('177', 'นางสุดา  ยุทธโท', 'ร่วมกิจกรรมรณรงค์การคัดกรองและอบรมให้ความรู้วิธีกำจัดความเครียดแก่ผู้ที่มีความเสี่ยงด้านจิตเวชและผู้ป่วยจิตเวช', 'Y');
INSERT INTO `course--` VALUES ('178', 'นางวรรณี  ศิริทรางกูร', 'เข้าร่วมประชุมแทนผู้อำนวยการโรงพยาบาล เรื่อง FTE ของพยาบาล', 'Y');
INSERT INTO `course--` VALUES ('179', 'นางวรรณี  ศิริทรางกูร', 'ประชุมกรรมการชมรมเครือข่ายพยาบาลจิตเวช ', 'Y');
INSERT INTO `course--` VALUES ('180', 'นางสาวเขมวันต์  ไมตรีจรรย์', 'ประชุมวิชาการ ประชาชนสุขภาพดี วิสัญญีมีสุข ในยุค Thailand 4.0', 'Y');
INSERT INTO `course--` VALUES ('181', 'นายชัยวัฒน์  พุทธัสโร', 'ประชุมเชิงปฏิบัติการการพัฒนาศูนย์เรียนรู้', 'Y');
INSERT INTO `course--` VALUES ('182', 'นางวรรณี  ศิริทรางกูร', 'ประชุมเชิงปฏิบัติการการพัฒนาศูนย์เรียนรู้', 'Y');
INSERT INTO `course--` VALUES ('183', 'นายนรา  หนูทองสุข', 'เยี่ยมบ้านผู้ป่วยเตรียมชุมชนเด็กเร่ร่อน', 'Y');
INSERT INTO `course--` VALUES ('184', 'นางสุดา  ยุทธโท', 'เยี่ยมบ้านผู้ป่วยเตรียมชุมชนเด็กเร่ร่อน', 'Y');
INSERT INTO `course--` VALUES ('185', 'นางลลิดา  สุริยวงศ์', 'เยี่ยมบ้านผู้ป่วยเตรียมชุมชนเด็กเร่ร่อน', 'Y');
INSERT INTO `course--` VALUES ('186', 'นางเมตตา  เลิศเกียรติรัชตะ', 'ประชุมเชิงปฏิบัติการเพื่อขับเคลื่อนการดำเนินงานสุขภาพจิตและจิตเวชในเขตสุขภาพ ระยะที่ 2  ภาคเหนือ', 'Y');
INSERT INTO `course--` VALUES ('187', 'นางกัณณวัณฑ์  สกูลหรัง', 'ประชุมเชิงปฏิบัติการเพื่อขับเคลื่อนการดำเนินงานสุขภาพจิตและจิตเวชในเขตสุขภาพ ระยะที่ 2  ภาคเหนือ', 'Y');
INSERT INTO `course--` VALUES ('188', 'นายนพพร  ตันติรังสี', 'ประชุมเชิงปฏิบัติการเพื่อขับเคลื่อนการดำเนินงานสุขภาพจิตและจิตเวชในเขตสุขภาพ ระยะที่ 2  ภาคเหนือ', 'Y');
INSERT INTO `course--` VALUES ('189', 'นายชญานนท์  สุวรรณชัย', 'อบรมการใช้งาน Big Data ด้านสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('190', 'นางสุดา  ยุทธโท', 'ตราจราชการการนิเทศงานพยาบาลสาธารณสุข ปี 60 รอบที่ 2', 'Y');
INSERT INTO `course--` VALUES ('191', 'นางวิภา  สุวรรณรัตน์', 'ตราจราชการการนิเทศงานพยาบาลสาธารณสุข ปี 60 รอบที่ 2', 'Y');
INSERT INTO `course--` VALUES ('192', 'นางสาวกันตวรรณ  มากวิจิต', 'ตราจราชการการนิเทศงานพยาบาลสาธารณสุข ปี 60 รอบที่ 2', 'Y');
INSERT INTO `course--` VALUES ('193', 'นายศักดิ์สิทธิ์  สนิทวงศ์ ณ อยุธยา', 'ตราจราชการการนิเทศงานพยาบาลสาธารณสุข ปี 60 รอบที่ 2', 'Y');
INSERT INTO `course--` VALUES ('194', 'นายชญานนท์  สุวรรณชัย', 'ประชุมพิจารณาผลวิเคราะห์ข้อมูลสถานการณ์และแนวโน้มโรคจิตเวช', 'Y');
INSERT INTO `course--` VALUES ('195', 'นางวรรณี  เอียดประพาล', 'พัฒนาสายงานการพยาบาลเฉพาะทางสาขาการพยาบาลสุขภาพจิตและจิตเวชเด็ก', 'Y');
INSERT INTO `course--` VALUES ('196', 'นางสาวพรชนก  สุวรรณพรรค', 'อบรมหลักสูตรผู้บริหารการสาธารณสุขระดับต้น รุ่นที่ 27 ปีงบประมาณ 2560', 'Y');
INSERT INTO `course--` VALUES ('197', 'นางมณฑา  ขาวเขียว', 'การเสริมสร้างสมรรถนะด้านการเงินการคลัง กรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('198', 'นางสาวจินดาวรรณ  โภชนุกูล', 'การเสริมสร้างสมรรถนะด้านการเงินการคลัง กรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('199', 'นางสาวสมฤทัย  บุญช่วย', 'การจัดทำแผนกการดำเนินงานชมรมเภสัชกรจิตเวช ครั้งที่2 ปี 2560', 'Y');
INSERT INTO `course--` VALUES ('200', 'นายอนุชา  พุทธิมา', 'โครงการพัฒนาระบบการดูแลผู้ป่วยจิตเวชตามระยะของการดูแล staying ', 'Y');
INSERT INTO `course--` VALUES ('201', 'นายธนพล  แสนสุข', 'โครงการพัฒนาระบบการดูแลผู้ป่วยจิตเวชตามระยะของการดูแล staying ', 'Y');
INSERT INTO `course--` VALUES ('202', 'นายชญานนท์  สุวรรณชัย', 'ประชุมเชิงปฏิบัติการแนวทางการใช้โปรแกรมระบบพัฒนารายบุคคล IPD', 'Y');
INSERT INTO `course--` VALUES ('203', 'นางสาวรักษิณา  พรมทองบุญ', 'การปฏิบัติการด้านจิตวิทยาคลินิก', 'Y');
INSERT INTO `course--` VALUES ('204', 'นางวรางคณา  มุสิกะไชย', 'เส้นทางสู่ความสำเร็จของการดำเนินงานเพื่อยกระดับองค์กรสู่การเป็นองค์กรแห่งการเรียนรู้', 'Y');
INSERT INTO `course--` VALUES ('205', 'นางสาวถนอมรัตน์  หุตะจูฑะ', 'ประชุมคณะกรรมและคณะทำงานวางแผนและจัดทำหลักเกณฑ์การกำหนดตำแหน่งพยาบาลวิชาชีพ ระดับชำนายการพิเศษ กรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('206', 'นายวิชัย  ลิขสิทธิ์ดำรงกุล', 'ประชุมเชิงปฏิบัติการเภสัชกรรมคลินิก ครั้งที่ 35/2560', 'Y');
INSERT INTO `course--` VALUES ('207', 'นางสาวจันทร์จิรา  ธวัชสุวรรณ', 'หลักเกณฑ์และวิธีการคำนวณราคากลางงานก่อสร้าง', 'Y');
INSERT INTO `course--` VALUES ('208', 'นางฐิตาพร  พูลแก้ว', 'หลักเกณฑ์และวิธีการคำนวณราคากลางงานก่อสร้าง', 'Y');
INSERT INTO `course--` VALUES ('209', 'นายชญานนท์  สุวรรณชัย', 'อบรมหลักสูตร Android Appication Development', 'Y');
INSERT INTO `course--` VALUES ('210', 'นางเมตตา  เลิศเกียรติรัชตะ', 'ประชุมคณะทำงานบริหารความเสี่ยงด้านยุทธศาสตร์ของกรมสุขภาพจิต ประจำปี 2560', 'Y');
INSERT INTO `course--` VALUES ('211', 'นางสาวเขมวันต์  ไมตรีจรรย์', 'การอบรมฟื้นฟูวิชาการวิสัญญีวิทยาสำหรับวิสัญญีพยาบาล ครั้งที่ 56', 'Y');
INSERT INTO `course--` VALUES ('212', 'นางสยาภรณ์  เดชดี', 'ประชุมวิชาการเรื่องการบริหารการพยาบาลวิกฤตหรือโอกาสในยุคประเทศไทย 4.0', 'Y');
INSERT INTO `course--` VALUES ('213', 'นางอชิรญาณ์  หมัดหมาน', 'อบรมหลักสูตรการเสริมสร้างมืออาชีพการบริหารทรัพยากรบุคคลระดับผู้ปฏิบัติงาน(เครือข่าย)', 'Y');
INSERT INTO `course--` VALUES ('214', 'นางพุทธิมา  จุนาพงศ์', 'อบรมหลักสูตรการเสริมสร้างมืออาชีพการบริหารทรัพยากรบุคคลระดับผู้ปฏิบัติงาน(เครือข่าย)', 'Y');
INSERT INTO `course--` VALUES ('215', 'นางสาวอัญชลี  บุญรัตนา', 'โครงการประชุมวิชาการสมาคมนักจิตวิทยาคลินิกไทย ประจำปี 2559 ครั้งที่ 40', 'Y');
INSERT INTO `course--` VALUES ('216', 'นางอชิรญาณ์  หมัดหมาน', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course--` VALUES ('217', 'นางสาวอาซีซ๊ะ  นุ๊หลี', 'สัมนาผู้มีส่วนได้ส่วนเสีย หลักสูตรวิทยาศาสตร์บันฑิต สาขาวิชาจิตวิทยา ', 'Y');
INSERT INTO `course--` VALUES ('218', 'นางเบญจมาศ  แก้วกับทอง', 'อบรมเชิงปฏิบัติการพัฒนาระบบบริการสุขภาพจิตเวชในเรือนจำ สำหรับผู้ปฏิบัติงานในระสาธารณสุข', 'Y');
INSERT INTO `course--` VALUES ('219', 'นางสาววิยดา  วุ่นบุญชู', 'อบรมเรื่องเครื่องมืออุปกรณ์ทันตกรรม ทันสมัย ดูแลรักษาอย่างไรให้พร้อมใช้งาน', 'Y');
INSERT INTO `course--` VALUES ('220', 'นางสาววันเพ็ญ  เชตุวัน', 'อบรมเชิงปฏิบัติการหลักสูตรกระบงนการนิติจิตเวชสำหรับทีมสหวิชาชีพ', 'Y');
INSERT INTO `course--` VALUES ('221', 'นางสาวปรียาภรณ์  บุญเลิศ', 'อบรมเชิงปฏิบัติการหลักสูตรกระบงนการนิติจิตเวชสำหรับทีมสหวิชาชีพ', 'Y');
INSERT INTO `course--` VALUES ('222', 'นางสาวนิฏฐา  กาญจนโชติ', 'ประชุมการจัดการงานบริการเภสัชกรรม ', 'Y');
INSERT INTO `course--` VALUES ('223', 'นางสาวอาซีซ๊ะ  นุ๊หลี', 'อบรมหลักสูตรการปฏิบัติงานด้านจิตวิทยาคลินิก', 'Y');
INSERT INTO `course--` VALUES ('224', 'นายบัณฑิต  คงประสิทธิ์', 'ประชุมเชิงปฏิบัติการเพื่อการพัฒนาจิตและแลกเปลี่ยนเรียนรู้การเป็นผู้บำบัดหลักสูตรสติบำบัด', 'Y');
INSERT INTO `course--` VALUES ('225', 'นางสาววันเพ็ญ  เชตุวัน', 'อบรมการบำบัดทางจิตวิทยา', 'Y');
INSERT INTO `course--` VALUES ('226', 'นายเอกพงษ์  ชูทอง', 'ประชุมเพื่อติดตามผลการดำเนินงานระบบ CASEMIX ผู้ป่วยจิตเวช', 'Y');
INSERT INTO `course--` VALUES ('227', 'นายเอกพงษ์  ชูทอง', 'ประชุมเชิงปฏิบัติการเพื่อการพัฒนาโปรแกรม Thai Refer', 'Y');
INSERT INTO `course--` VALUES ('228', 'นางสาวนิจตรา  ละหะมะ', 'อบรมทบทวนความรู้ด้านจิตวิทยาคลินิกสัญจร', 'Y');
INSERT INTO `course--` VALUES ('229', 'นางสาววันเพ็ญ  เชติวัน', 'อบรมทบทวนความรู้ด้านจิตวิทยาคลินิกสัญจร', 'Y');
INSERT INTO `course--` VALUES ('230', 'นางสาวอาซีซ๊ะ  นุ๊หลี', 'อบรมทบทวนความรู้ด้านจิตวิทยาคลินิกสัญจร', 'Y');
INSERT INTO `course--` VALUES ('231', 'นายบัณฑิต  คงประสิทธิ์', 'อบรมทบทวนความรู้ด้านจิตวิทยาคลินิกสัญจร', 'Y');
INSERT INTO `course--` VALUES ('232', 'นายบัณฑิต  คงประสิทธิ์', 'ประชุมเชิงปฏิบัติการประเมินผลการใช้คู่มือตรวจวินิจฉัยทางประสาทจิตวิทยา', 'Y');
INSERT INTO `course--` VALUES ('233', 'นางสาวปรียาภรณ์  บุญเลิศ', 'โครงการอบรมนักสังคมสงเคราะห์จิตเวช สังกัดกรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('234', 'นางสาวนิฏฐา  กาญจนโชติ', 'ประชุมเชิงปฏิบัติการเรื่อง Update on Phamacathrapy for ASD and ADHD', 'Y');
INSERT INTO `course--` VALUES ('235', 'นางสาวอภิญญา  บัวระกา', 'อบรมการใช้โปรแกรมเพิ่มประสิทธิภาพการจัดการงบประมาณและแผนงาน กรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('236', 'นางสาวพรรณอร  จิตวัชรกุล', 'อบรมการใช้โปรแกรมเพิ่มประสิทธิภาพการจัดการงบประมาณและแผนงาน กรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('237', 'นายเอกพงษ์  ชูทอง', 'ประชุมเชิงปฏิบัติการการใช้โปรแกรมฐานข้อมูลผู้ป่วยโรคจิตเภท', 'Y');
INSERT INTO `course--` VALUES ('238', 'นางสาวดารีรัตน์  บุญธรรม', 'การเขียนหนังสือราชการ', 'Y');
INSERT INTO `course--` VALUES ('239', 'นายอนิศ  ตาเดอิน', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพด้านการจัดทำ INFOGRAPHIC', 'Y');
INSERT INTO `course--` VALUES ('240', 'นางสาวปิ่นใจ  คงขาว', 'โครงการพัฒนาศักยภาพบุคลากรในการปฏิบัติงานผ่านระบบ GFIMS', 'Y');
INSERT INTO `course--` VALUES ('241', 'นายธีรวัฒน์  คงชู', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพนักวิจัยเชิงคุณภาพ ปีงบประมาณ 2560', 'Y');
INSERT INTO `course--` VALUES ('242', 'นางสว่าง นัตตะโร', 'โครงการเสริมสร้างความพึงพอใจในชีวิตเพื่อสุขภาพจิตผู้สูงอายุ ปี 60', 'Y');
INSERT INTO `course--` VALUES ('243', 'นางสาวปิ่นใจ  คงขาว', 'อบรมหลักสูตร การเสริมสร้างสมรรถนะด้านการเงินการคลัง กรมสุขภาพจิต ', 'Y');
INSERT INTO `course--` VALUES ('244', 'นางสาวปิยชนน์ ปิยะภาโส', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course--` VALUES ('245', 'นายจรัญ ฤทธิเดช', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course--` VALUES ('246', 'นายเฉลิมพร สุวรรณรัตน์', 'โครงการเสริมสร้างความพึงพอใจในชีวิตเพื่อสุขภาพจิตผู้สูงอายุ ปี 60', 'Y');
INSERT INTO `course--` VALUES ('247', 'นายชัยรัตน์ รัตนสังข์', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course--` VALUES ('248', 'นายชำนาญ ซุ้นสุวรรณ', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course--` VALUES ('249', 'นายณัฐวัฒน์ เรืองชุติกาญจน์', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course--` VALUES ('250', 'นายปรีชา ทองสองแก้ว', 'โครงการเสริมสร้างความพึงพอใจในชีวิตเพื่อสุขภาพจิตผู้สูงอายุ ปี 60', 'Y');
INSERT INTO `course--` VALUES ('251', 'นายมณเฑียร อัคลา', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course--` VALUES ('252', 'นายยงยุทธ ทองเจริญ', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course--` VALUES ('253', 'นายอดิศักดิ์ ปิ่นทองพันธุ์', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course--` VALUES ('255', 'นายอนิศ  ตาเดอิน', 'โครงการเทศบาลสงขลารักษ์สุขภาพ(ออกบูธ)', 'Y');
INSERT INTO `course--` VALUES ('256', 'นายอนิศ  ตาเดอิน', 'โครงการเสริมสร้างความพึงพอใจในชีวิตเพื่อสุขภาพจิตผู้สูงอายุ ปี 60', 'Y');
INSERT INTO `course--` VALUES ('257', 'น.ส.จิราภรณ์ กำเนิดกลับ', 'ประชุมเชิงปฏิบัติการเรื่องโปรแกรมระบบสารบรรณอิเลคทรอนิคส์', 'Y');
INSERT INTO `course--` VALUES ('258', 'นางภาณิชา  มณีรัตน์', 'ประชุมเชิงปฏิบัติการเพิ่มประสิทธภาพการดำเนินสุขภาพจิตและจิตเวช', 'Y');
INSERT INTO `course--` VALUES ('259', 'นางสาวปิ่นใจ  คงขาว', 'การเสริมสร้างสมรรถนะด้านการเงินการคลัง กรมสุขภาพจิต', 'Y');
INSERT INTO `course--` VALUES ('260', 'นางสาวปัตมา  สุขช่วย', 'การเสริมสร้างสมรรถนะด้านการเงินการคลัง กรมสุขภาพจิต', 'Y');

-- ----------------------------
-- Table structure for course_competencies---
-- ----------------------------
DROP TABLE IF EXISTS `course_competencies---`;
CREATE TABLE `course_competencies---` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `course_name` text,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=163 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course_competencies---
-- ----------------------------
INSERT INTO `course_competencies---` VALUES ('1', 'Pharmacautical Car for Patients with Chronic Disease', 'Y');
INSERT INTO `course_competencies---` VALUES ('2', 'การจัดทำแผนกการดำเนินงานชมรมเภสัชกรจิตเวช ครั้งที่2 ปี 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('3', 'การซ้อมแผนบรรเทาสาธารณภัยเพื่อจัดทำแนวทางการประสานการตอบสนองการบรรเทาสาธารณภัยในจังหวัดชายแดนใต้', 'Y');
INSERT INTO `course_competencies---` VALUES ('4', 'การปฏิบัติการด้านจิตวิทยาคลินิก', 'Y');
INSERT INTO `course_competencies---` VALUES ('5', 'การประยุกต์เครื่องมือบริหารในงานเภสัชกรรม ครั้งที่ 1', 'Y');
INSERT INTO `course_competencies---` VALUES ('6', 'การพัฒนาสมรรถนะการพัฒนาการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('7', 'การรวบรวมข้อมูลเชิงคุณภาพเพื่อการวิจัยและพัฒนางานบริบาลเภสัชกรรมปฐมภูมิ', 'Y');
INSERT INTO `course_competencies---` VALUES ('8', 'การอบรมฟื้นฟูวิชาการวิสัญญีวิทยาสำหรับวิสัญญีพยาบาล ครั้งที่ 56', 'Y');
INSERT INTO `course_competencies---` VALUES ('9', 'การอบรมหลักสูตร การผลิตสื่อและการใช้สื่อสังคมออนไลน์', 'Y');
INSERT INTO `course_competencies---` VALUES ('10', 'การเขียนหนังสือราชการ', 'Y');
INSERT INTO `course_competencies---` VALUES ('11', 'การเสริมสร้างสมรรถนะด้านการเงินการคลัง กรมสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('12', 'การแลกเปลี่ยนเรียนรู้ผลการดำเนินการเพื่อยกระดับองค์กรสู่การเป็นองค์กรแห่งการเรียนรู้ของหน่วยงานในกรมสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('13', 'ความรู้และทักษะที่จำเป็นด้านกายภาพบำบัดในผู้ป่วยจิตเวช', 'Y');
INSERT INTO `course_competencies---` VALUES ('14', 'ตราจราชการการนิเทศงานพยาบาลสาธารณสุข ปี 60 รอบที่ 2', 'Y');
INSERT INTO `course_competencies---` VALUES ('15', 'ทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพและเส้นทางการฝึกอบรมข้าราชการ', 'Y');
INSERT INTO `course_competencies---` VALUES ('16', 'นำส่งผู้ป่วยกลับภูมิลำเนาและเตรียมครอบครัว/ชุมชน ', 'Y');
INSERT INTO `course_competencies---` VALUES ('17', 'นำเสนอผลงานประชุมวิชาการสุขภาพจิตนานาชาติ', 'Y');
INSERT INTO `course_competencies---` VALUES ('18', 'นิเทศติดตามประเมินผลเครือข่ายแบบบูรณาการในพื้นที่ ปี 60', 'Y');
INSERT INTO `course_competencies---` VALUES ('19', 'นิเทศติดตามและการให้การช่วยเหลือเครือข่ายในพื้นที่ ประจำปี 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('20', 'นิเทศติดตามและการให้การช่วยเหลือแก่เครือข่ายในพื้นที่', 'Y');
INSERT INTO `course_competencies---` VALUES ('21', 'ประชมเชิงปฏิบัติการการพัฒนาคุณภาพและวิเคราะห์ภาระงาน FTE', 'Y');
INSERT INTO `course_competencies---` VALUES ('22', 'ประชุม FERCAPINTERNATIONAL CONFERENCE', 'Y');
INSERT INTO `course_competencies---` VALUES ('23', 'ประชุม SERVICE PLAN', 'Y');
INSERT INTO `course_competencies---` VALUES ('24', 'ประชุมกรรมการชมรมเครือข่ายพยาบาลจิตเวช ', 'Y');
INSERT INTO `course_competencies---` VALUES ('25', 'ประชุมการขับเคลื่อนและพัฒนาสมรรถนะบุคคลากรสุขภาพจิตในการส่งเสริมสุขภาพจิตผู้สูงอายุ', 'Y');
INSERT INTO `course_competencies---` VALUES ('26', 'ประชุมการจัดการงานบริการเภสัชกรรม ', 'Y');
INSERT INTO `course_competencies---` VALUES ('27', 'ประชุมการดูแลผู้สูงอายุภาวะสมองเสื่อมตามแนวคิดฮิวแมนจูด', 'Y');
INSERT INTO `course_competencies---` VALUES ('28', 'ประชุมการปฏิบัติงานด้านจิตวิทยาคลินิก', 'Y');
INSERT INTO `course_competencies---` VALUES ('29', 'ประชุมการพัฒนาแนวเวชปฏิบัติรายโรคทางจิตเวชตามประเด็นความเป็นเลิศของหน่วยงานในกรมสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('30', 'ประชุมการเยียวยาจิตใจและพัฒนาวิชาการการดำเนินงานเพื่อเฝ้าระวังปัญหาสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('31', 'ประชุมคณะกรรมการการพัฒนาหลักสูตรการพยาบาลเฉพาะทาง กรมสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('32', 'ประชุมคณะกรรมการขับเคลื่อนการบังคับใช้พระราชบัญญัติสุขภาพจิต พ.ศ. 2551', 'Y');
INSERT INTO `course_competencies---` VALUES ('33', 'ประชุมคณะกรรมการชมรมนักจิตวิทยาคลินิก ครั้งที่ 1/2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('34', 'ประชุมคณะกรรมและคณะทำงานวางแผนและจัดทำหลักเกณฑ์การกำหนดตำแหน่งพยาบาลวิชาชีพ ระดับชำนายการพิเศษ กรมสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('35', 'ประชุมคณะทำงานดำเนินการด้านวิชาการเพื่อการจัดประชุมวิชาการสุขภาพจิตนานาชาติ ครั้งที่ 16 ปี 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('36', 'ประชุมคณะทำงานบริหารความเสี่ยงด้านยุทธศาสตร์ของกรมสุขภาพจิต ประจำปี 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('37', 'ประชุมความท้าทาย พยาบาลยุคไทยแลนด์ 4.0', 'Y');
INSERT INTO `course_competencies---` VALUES ('38', 'ประชุมชี้แจงแนวทางการดำเนินงานตามแผนยุทธศาสตร์กรมสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('39', 'ประชุมชี้แจงแนวทางการดำเนินงานตามแผนยุทธศาสตร์กรมสุขภาพจิต ยุทธศาสตร์ที่ 3', 'Y');
INSERT INTO `course_competencies---` VALUES ('40', 'ประชุมติดตามความก้าวหน้าโครงการวิจัยร่วม', 'Y');
INSERT INTO `course_competencies---` VALUES ('41', 'ประชุมทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพ', 'Y');
INSERT INTO `course_competencies---` VALUES ('42', 'ประชุมปฏิบัติการพัฒนาสักยภาพบุคลากรเพื่อดำเนินการยกระดังองค์กรสู่การเป้นองค์การแห่งการเรียนรู้โดยใช้การเทียบระดับ', 'Y');
INSERT INTO `course_competencies---` VALUES ('43', 'ประชุมผู้บริหารคณะกรรมการ เขตสุขภาพที่ 12', 'Y');
INSERT INTO `course_competencies---` VALUES ('44', 'ประชุมผู้บริหารและคณะกรรมการเขตสุขภาพที่ 12', 'Y');
INSERT INTO `course_competencies---` VALUES ('45', 'ประชุมพิจารณาผลวิเคราะห์ข้อมูลสถานการณ์และแนวโน้มโรคจิตเวช', 'Y');
INSERT INTO `course_competencies---` VALUES ('46', 'ประชุมวิชาการ ประชาชนสุขภาพดี วิสัญญีมีสุข ในยุค Thailand 4.0', 'Y');
INSERT INTO `course_competencies---` VALUES ('47', 'ประชุมวิชาการรองผู้อำนวยการฝ่ายบริหาร', 'Y');
INSERT INTO `course_competencies---` VALUES ('48', 'ประชุมวิชาการสมาคมนักกำหนดอาหารแห่งประเทศไทย ประจำปี 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('49', 'ประชุมวิชาการเรื่องการบริบาลเภสัชกรรมผู้ป่วยจิตเวช ประจำปี 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('50', 'ประชุมวิชาการเรื่องการบริหารการพยาบาลวิกฤตหรือโอกาสในยุคประเทศไทย 4.0', 'Y');
INSERT INTO `course_competencies---` VALUES ('51', 'ประชุมเชิงปฏบัติการพัฒนาคู่มือปฏิบัติงานทีมช่วยเหลือเยียวยาจิตใจผู้ประสบภาวะวิกฤติ ฉบับปรับปรุง ระยะที่ 1', 'Y');
INSERT INTO `course_competencies---` VALUES ('52', 'ประชุมเชิงปฏิบัติการ การพัฒนาศักยภาพด้านวิชาการแก่ผู้บริหารจัดการระบบการป้อนกันและแก้ไขปัญหายาเสพติดและสารเสพติด', 'Y');
INSERT INTO `course_competencies---` VALUES ('53', 'ประชุมเชิงปฏิบัติการการขับเคลื่อนการพัฒนาระบบบริการ SERVEICE PLAN สาขาจิตเวช', 'Y');
INSERT INTO `course_competencies---` VALUES ('54', 'ประชุมเชิงปฏิบัติการการพัฒนาศูนย์เรียนรู้', 'Y');
INSERT INTO `course_competencies---` VALUES ('55', 'ประชุมเชิงปฏิบัติการการพัฒนาสมรรถนะผู้บริหารการพยาบาลสู่ความเป็นเลิศด้าการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('56', 'ประชุมเชิงปฏิบัติการการพัฒนาสมรรถนะผู้บริหารการพยาบาลสู่ความเป็นเลิศด้านการพยาบาลจิตเวชและสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('57', 'ประชุมเชิงปฏิบัติการการสร้างความเข้มแข็งเครือข่ายผู้บริหารทางการพยาบาล', 'Y');
INSERT INTO `course_competencies---` VALUES ('58', 'ประชุมเชิงปฏิบัติการการแก้ไขปัญหายาเสพติด', 'Y');
INSERT INTO `course_competencies---` VALUES ('59', 'ประชุมเชิงปฏิบัติการการใช้โปรแกรมฐานข้อมูลผู้ป่วยโรคจิตเภท', 'Y');
INSERT INTO `course_competencies---` VALUES ('60', 'ประชุมเชิงปฏิบัติการประเมินผลการใช้คู่มือตรวจวินิจฉัยทางประสาทจิตวิทยา', 'Y');
INSERT INTO `course_competencies---` VALUES ('61', 'ประชุมเชิงปฏิบัติการพัฒนาบุคลกากรสายวิชาชีพโภชนาการ', 'Y');
INSERT INTO `course_competencies---` VALUES ('62', 'ประชุมเชิงปฏิบัติการพัฒนาศักยภาพบุคลากรเพื่อดำเนินการยกระดับองค์กร', 'Y');
INSERT INTO `course_competencies---` VALUES ('63', 'ประชุมเชิงปฏิบัติการพัฒนาแผนยุทธศาสตร์การบิรการปฐมภูมิ 4.0 พ.ศ. 2560-2579', 'Y');
INSERT INTO `course_competencies---` VALUES ('64', 'ประชุมเชิงปฏิบัติการเตรียมความพร้อมการซ้อมแผนตอบโต้สถานการณ์ฉุกเฉิน', 'Y');
INSERT INTO `course_competencies---` VALUES ('65', 'ประชุมเชิงปฏิบัติการเตรียมความพร้อมรับแผนตอบโต้สถานการณ์ฉุกเฉินและสาธารณภัย', 'Y');
INSERT INTO `course_competencies---` VALUES ('66', 'ประชุมเชิงปฏิบัติการเพิ่มประสิทธภาพการดำเนินสุขภาพจิตและจิตเวช', 'Y');
INSERT INTO `course_competencies---` VALUES ('67', 'ประชุมเชิงปฏิบัติการเพื่อการพัฒนาจิตและแลกเปลี่ยนเรียนรู้การเป็นผู้บำบัดหลักสูตรสติบำบัด', 'Y');
INSERT INTO `course_competencies---` VALUES ('68', 'ประชุมเชิงปฏิบัติการเพื่อการพัฒนาโปรแกรม Thai Refer', 'Y');
INSERT INTO `course_competencies---` VALUES ('69', 'ประชุมเชิงปฏิบัติการเพื่อขับเคลื่อนการดำเนินงานสุขภาพจิตและจิตเวชในเขตสุขภาพ ระยะที่ 2  ภาคเหนือ', 'Y');
INSERT INTO `course_competencies---` VALUES ('70', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนานักวิจัยหน้าใหม่ ครั้งที่ 2', 'Y');
INSERT INTO `course_competencies---` VALUES ('71', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพด้านการจัดทำ INFOGRAPHIC', 'Y');
INSERT INTO `course_competencies---` VALUES ('72', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพด้านการจัดทำหลักสูตร', 'Y');
INSERT INTO `course_competencies---` VALUES ('73', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพนักวิจัยเชิงคุณภาพ ปีงบประมาณ 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('74', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพในการจัดทำหลักสูตรอบรมแบบเน้นผลสัมลัพธ์', 'Y');
INSERT INTO `course_competencies---` VALUES ('75', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาสมรรถนะในการเขียนและประเมินบทความวิชาการหลักสูตรก้าวหน้า', 'Y');
INSERT INTO `course_competencies---` VALUES ('76', 'ประชุมเชิงปฏิบัติการเพื่อพัฒนาแนวทางการจักกิจกรรมและการประชาสัมพันธ์ งานห้องสมุด', 'Y');
INSERT INTO `course_competencies---` VALUES ('77', 'ประชุมเชิงปฏิบัติการเพื่อพัฒาระบบคุณภาพการบริหาจัดการภาครัฐของหน่วยงาน', 'Y');
INSERT INTO `course_competencies---` VALUES ('78', 'ประชุมเชิงปฏิบัติการเพื่อสรุปผลการตรวจราชการนิเทศงาน', 'Y');
INSERT INTO `course_competencies---` VALUES ('79', 'ประชุมเชิงปฏิบัติการเภสัชกรรมคลินิก ครั้งที่ 35/2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('80', 'ประชุมเชิงปฏิบัติการเรื่อง COGNITIRE BEHAVIOR THEREPY FOR AUTISM SPECTRUM DISORDER', 'Y');
INSERT INTO `course_competencies---` VALUES ('81', 'ประชุมเชิงปฏิบัติการเรื่อง Update on Phamacathrapy for ASD and ADHD', 'Y');
INSERT INTO `course_competencies---` VALUES ('82', 'ประชุมเชิงปฏิบัติการเรื่องการพัฒนาบุคลากรตามสายวิชาชีพเภสัชกรรม กรมสุขภาพจิต ครั้งที่ 1/2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('83', 'ประชุมเชิงปฏิบัติการเรื่องตัวชี้วัดตามคำรับรองการปฏิบัติราชการของหน่วยงานในสังกัดกรมสุขภาพจิต ประจำปีงบประมาณ 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('84', 'ประชุมเชิงปฏิบัติการเรื่องเกณฑ์รางวัลบริการภาครัฐแห่งชาติ ประจำปี พ.ศ. 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('85', 'ประชุมเชิงปฏิบัติการเรื่องโปรแกรมระบบสารบรรณอิเลคทรอนิคส์', 'Y');
INSERT INTO `course_competencies---` VALUES ('86', 'ประชุมเชิงปฏิบัติการแนวทางการใช้โปรแกรมระบบพัฒนารายบุคคล IPD', 'Y');
INSERT INTO `course_competencies---` VALUES ('87', 'ประชุมเชิงปฏิบัติเพื่อขับเคลื่อนการพัฒนาระบบบริการสุขภาพจิตและจิตเวช', 'Y');
INSERT INTO `course_competencies---` VALUES ('88', 'ประชุมเพื่อติดตามผลการดำเนินงานระบบ COSEMIX ผู้ป่วยจิตเวช', 'Y');
INSERT INTO `course_competencies---` VALUES ('89', 'ประชุมเพื่อติดตามและสรุปผลการดำเนินการฝึกอบรมหลักสูตร การปฏิบัติงานด้านจิตวิทยาคลินิก', 'Y');
INSERT INTO `course_competencies---` VALUES ('90', 'ประชุมเพื่อติดตามและสรุปผลการดำเนินงานการฝึกอบรมหลักสูตร การปฏิบัติงานด้านจิตวิทยาคลินิก', 'Y');
INSERT INTO `course_competencies---` VALUES ('91', 'ประชุมเพื่อทบทวนการวิเคราะห์ความต้องการกำลังคนตามภาระงาน FTE', 'Y');
INSERT INTO `course_competencies---` VALUES ('92', 'ประชุมเพื่อทบทวนหลักสูตรการอบรมแพทย์เพื่อเพิ่มความรู้ ความสามารถ สาขาเวชศาสตร์ป้องกัน แขนงสุขภาพจิตชุมชน ', 'Y');
INSERT INTO `course_competencies---` VALUES ('93', 'ประชุมเพื่อทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพ (Career Path)', 'Y');
INSERT INTO `course_competencies---` VALUES ('94', 'ประชุมเพื่อทบทวนแผนส่งเสริมความก้าวหน้าในอาชีพและเส้นทางการฝึกอบรมข้าราชการ', 'Y');
INSERT INTO `course_competencies---` VALUES ('95', 'ประชุมเพื่อทบทวนแผนส่งเสริมความหน้าในอาชีพและเส้นทางการฝึกอบรมข้าราชการ', 'Y');
INSERT INTO `course_competencies---` VALUES ('96', 'ประชุมเพื่อทบทวนและหารือสรุปรายละเอียดการกำหนดความรู้ ทักษะและสมรรถนะสายงานพยาบาลวิชาชพีและพยาบาลเทคนิค', 'Y');
INSERT INTO `course_competencies---` VALUES ('97', 'ประชุมเพื่อวิเคราะห์ความต้องการกำลังคนตามภารงาน FTE', 'Y');
INSERT INTO `course_competencies---` VALUES ('98', 'ประชุมเพื่อวิเคราะห์ความต้องการกำลังคนตามภาระงาน FTE', 'Y');
INSERT INTO `course_competencies---` VALUES ('99', 'ประชุมเรื่องบูรณาการห้องปฏิบัติการสมาชิกแผนการทดสอบความชำนาญและผู้มีส่วนได้ส่วนเสียด้านการตรวจสารเสพติด', 'Y');
INSERT INTO `course_competencies---` VALUES ('100', 'ประชุมโครงการพัฒนาศักยภาพเครือข่ายนักสื่อสารสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('101', 'พัฒนาสายงานการพยาบาลเฉพาะทางสาขาการพยาบาลสุขภาพจิตและจิตเวชเด็ก', 'Y');
INSERT INTO `course_competencies---` VALUES ('102', 'ร่วมกิจกรรมรณรงค์การคัดกรองและอบรมให้ความรู้วิธีกำจัดความเครียดแก่ผู้ที่มีความเสี่ยงด้านจิตเวชและผู้ป่วยจิตเวช', 'Y');
INSERT INTO `course_competencies---` VALUES ('103', 'ศึกษาดูงาน โครงการการพยาบาลวิกฤตสุขภาพจิตจากภัยพิบัติฯ กำลังพลทหารเรือ', 'Y');
INSERT INTO `course_competencies---` VALUES ('104', 'สรุปผลการตรวจราชการงานสุขภาพจิตรอบที่ 1', 'Y');
INSERT INTO `course_competencies---` VALUES ('105', 'สัมนาผู้มีส่วนได้ส่วนเสีย หลักสูตรวิทยาศาสตร์บันฑิต สาขาวิชาจิตวิทยา ', 'Y');
INSERT INTO `course_competencies---` VALUES ('106', 'สัมนาวิชาการเรื่อง สุขด้วยสติ ทั้งองค์กรอย่างยั่งยืน', 'Y');
INSERT INTO `course_competencies---` VALUES ('107', 'หลักเกณฑ์และวิธีการคำนวณราคากลางงานก่อสร้าง', 'Y');
INSERT INTO `course_competencies---` VALUES ('108', 'อบรม JAVA SERVLET AND JSP FOR WEB FROGRAMING', 'Y');
INSERT INTO `course_competencies---` VALUES ('109', 'อบรมการบำบัดทางจิตวิทยา', 'Y');
INSERT INTO `course_competencies---` VALUES ('110', 'อบรมการพัฒนาบุคลากรเครือข่ายด้านภาษาอังกฤษเพื่อการสื่อสารประชาคมดาเซียน', 'Y');
INSERT INTO `course_competencies---` VALUES ('111', 'อบรมการพัฒนาบุคลากรเครือข่ายด้านภาษาอังกฤษเพื่อการสื่อสารประชาคมอาเซียน', 'Y');
INSERT INTO `course_competencies---` VALUES ('112', 'อบรมการใช้งาน Big Data ด้านสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('113', 'อบรมการใช้โปรแกรมเพิ่มประสิทธิภาพการจัดการงบประมาณและแผนงาน กรมสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('114', 'อบรมทบทวนความรู้ด้านจิตวิทยาคลินิกสัญจร', 'Y');
INSERT INTO `course_competencies---` VALUES ('115', 'อบรมภาษาอังกฤษเพื่องานสุขภาพจิตระหว่างประเทศ ประจำปีงบประมาณ 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('116', 'อบรมวิทยาการหลัก TOT ', 'Y');
INSERT INTO `course_competencies---` VALUES ('117', 'อบรมสัมนาหลักสูตรการเป็นข้าราชการที่ดี', 'Y');
INSERT INTO `course_competencies---` VALUES ('118', 'อบรมหลักสูตร Android Appication Development', 'Y');
INSERT INTO `course_competencies---` VALUES ('119', 'อบรมหลักสูตร JVVA FOR NON-PROGAMMER', 'Y');
INSERT INTO `course_competencies---` VALUES ('120', 'อบรมหลักสูตร การเสริมสร้างสมรรถนะด้านการเงินการคลัง กรมสุขภาพจิต ', 'Y');
INSERT INTO `course_competencies---` VALUES ('121', 'อบรมหลักสูตรการบำบัดสุกในชุมชน', 'Y');
INSERT INTO `course_competencies---` VALUES ('122', 'อบรมหลักสูตรการปฏิบัติงานด้านจิตวิทยาคลินิก', 'Y');
INSERT INTO `course_competencies---` VALUES ('123', 'อบรมหลักสูตรการพัฒนาศักยภาพการบริหารการเงินการคลังภาครัฐและการจัดการความขัดแย้ง รุ่นที่ 2', 'Y');
INSERT INTO `course_competencies---` VALUES ('124', 'อบรมหลักสูตรการพัฒนาศักยภาพทางการบริหารการเงินการคลังภาครัฐและการจัดการความขัดแย้ง', 'Y');
INSERT INTO `course_competencies---` VALUES ('125', 'อบรมหลักสูตรการพัฒนาศักยภาพทางการบริหารการเงินการคลังภาครัฐและการจัดการความขัดแย้งเพิ่มเติม รุ่นที่ 3', 'Y');
INSERT INTO `course_competencies---` VALUES ('126', 'อบรมหลักสูตรการเยียวยาจิตใจผู้ได้รับผลกระทบ', 'Y');
INSERT INTO `course_competencies---` VALUES ('127', 'อบรมหลักสูตรการเสริมสร้างมืออาชีพการบริหารทรัพยากรบุคคลระดับผู้ปฏิบัติงาน(เครือข่าย)', 'Y');
INSERT INTO `course_competencies---` VALUES ('128', 'อบรมหลักสูตรการเสิรมสร้างทัศนคติที่ดีสำหรับผู้บริหารตามรอยเบื้องยุคลบาท', 'Y');
INSERT INTO `course_competencies---` VALUES ('129', 'อบรมหลักสูตรผู้บริหารการสาธารณสุขระดับต้น รุ่นที่ 27 ประจำปีงบประมาณ 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('130', 'อบรมหลักสูตรผู้บริหารการสาธารณสุขระดับต้น รุ่นที่ 27 ปีงบประมาณ 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('131', 'อบรมเชิงปฏิบัติการ MERT', 'Y');
INSERT INTO `course_competencies---` VALUES ('132', 'อบรมเชิงปฏิบัติการพัฒนาระบบบริการสุขภาพจิตเวชในเรือนจำ สำหรับผู้ปฏิบัติงานในระสาธารณสุข', 'Y');
INSERT INTO `course_competencies---` VALUES ('133', 'อบรมเชิงปฏิบัติการหลักสูตรกระบงนการนิติจิตเวชสำหรับทีมสหวิชาชีพ', 'Y');
INSERT INTO `course_competencies---` VALUES ('134', 'อบรมเชิงปฏิบัติการหลักสูตรกระบวนการนิติจิตเวชสำหรับทีมสหวิชาชีพ', 'Y');
INSERT INTO `course_competencies---` VALUES ('135', 'อบรมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพนักจิตวิทยาคลินิกด้านาการใช้แบบทดสอบทางจิตวิทยาในวัยรุ่น', 'Y');
INSERT INTO `course_competencies---` VALUES ('136', 'อบรมเรื่องเครื่องมืออุปกรณ์ทันตกรรม ทันสมัย ดูแลรักษาอย่างไรให้พร้อมใช้งาน', 'Y');
INSERT INTO `course_competencies---` VALUES ('137', 'อบรมให้ความรู้กฏหมายด้านการบริหารสัญญาการก่อสร้างและการจัดการที่ราชพัสดุ', 'Y');
INSERT INTO `course_competencies---` VALUES ('138', 'เข้าร่วมประชุมแทนผู้อำนวยการโรงพยาบาล เรื่อง FTE ของพยาบาล', 'Y');
INSERT INTO `course_competencies---` VALUES ('139', 'เตรียมครอบครัวผู้ป่วยและเครื่อข่ายสาธารณสุข จังหวัดสตูล', 'Y');
INSERT INTO `course_competencies---` VALUES ('140', 'เยี่ยมบ้านผู้ป่วยเตรียมชุมชนเด็กเร่ร่อน', 'Y');
INSERT INTO `course_competencies---` VALUES ('141', 'เส้นทางสู่ความสำเร็จของการดำเนินงานเพื่อยกระดับองค์กรสู่การเป็นองค์กรแห่งการเรียนรู้', 'Y');
INSERT INTO `course_competencies---` VALUES ('142', 'โครงการประชุมวิชาการสมาคมนักจิตวิทยาคลินิกไทย ประจำปี 2559 ครั้งที่ 40', 'Y');
INSERT INTO `course_competencies---` VALUES ('143', 'โครงการประชุมเชิงปฏิบัติการเพื่อจัดทำต้นทุนผลผลิตของกรมสุขภาพจิต ประจำปีงบประมาณ 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('144', 'โครงการประชุมเชิงปฏิบัติการเรื่องความรู้ทางกฏหมายด้านพัสดุและแนวทางป้องกันผลประโยชน์ทับซ้อน', 'Y');
INSERT INTO `course_competencies---` VALUES ('145', 'โครงการพัฒนาระบบการดูแลผู้ป่วยจิตเวชตามระยะของการดูแล staying ', 'Y');
INSERT INTO `course_competencies---` VALUES ('146', 'โครงการพัฒนาระบบรายงานความเป็นเลิศของหน่วยงานในสังกัดกรมสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('147', 'โครงการพัฒนาศักยภาพบุคลากรการปฏิบัติงานในระบบ GFIMS', 'Y');
INSERT INTO `course_competencies---` VALUES ('148', 'โครงการพัฒนาศักยภาพบุคลากรในการปฏิบัติงานผ่านระบบ GFIMS ', 'Y');
INSERT INTO `course_competencies---` VALUES ('149', 'โครงการพัฒนาสมรรถนะด้านงานวิจัยและวิชาการ', 'Y');
INSERT INTO `course_competencies---` VALUES ('150', 'โครงการอบรมนักสังคมสงเคราะห์จิตเวช สังกัดกรมสุขภาพจิต', 'Y');
INSERT INTO `course_competencies---` VALUES ('151', 'โครงการอบรมภาษาจีนเพื่องานสุขภาพจิตระหว่างประเทศ', 'Y');
INSERT INTO `course_competencies---` VALUES ('152', 'โครงการอบรมหลักสูตรสติบำบัด', 'Y');
INSERT INTO `course_competencies---` VALUES ('153', 'โครงการอบรมเชิงปฏิบัติการ การจัดซื้อจัดจ้างด้วยวิธีตลาดอิเล็กทรอนิกส์', 'Y');
INSERT INTO `course_competencies---` VALUES ('154', 'โครงการอบรมแพทย์เพื่อเพิ่มพูนความรู้ทักษะแพทย์ฯ', 'Y');
INSERT INTO `course_competencies---` VALUES ('155', 'โครงการเทศบาลสงขลารักษ์สุขภาพ(ออกบูธ)', 'Y');
INSERT INTO `course_competencies---` VALUES ('156', 'โครงการเพิ่มคุณภาพระบบการรักษาทางทันตกรรมมาตรฐาน HA/HPH', 'Y');
INSERT INTO `course_competencies---` VALUES ('157', 'โครงการเสรมสร้างความรู้การบริหารทรัพยากรบุคคลภาครัฐ ด้านการอุธรณ์ร้องทุกข์และเทคนิคการสอบสวนทางวินัย', 'Y');
INSERT INTO `course_competencies---` VALUES ('158', 'โครงการเสริมสร้างความผูกพันของบุคลากรต่อองค์การ กรมสุขดภาพจิต ประจำปีงบประมาณ 2560', 'Y');
INSERT INTO `course_competencies---` VALUES ('159', 'โครงการเสริมสร้างความผูกพันธ์ของบุคลากรต่อองค์กร', 'Y');
INSERT INTO `course_competencies---` VALUES ('160', 'โครงการเสริมสร้างความผูกพันองค์กร', 'Y');
INSERT INTO `course_competencies---` VALUES ('161', 'โครงการเสริมสร้างความพึงพอใจในชีวิตเพื่อสุขภาพจิตผู้สูงอายุ ปี 60', 'Y');
INSERT INTO `course_competencies---` VALUES ('162', 'โปรแกรมระบบสารบรรณอิเล็กทรอนิกส์', 'Y');

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dep_code` varchar(12) DEFAULT NULL,
  `dep_name` varchar(255) DEFAULT NULL,
  `groupwork_code` varchar(3) DEFAULT NULL,
  `head_dep` varchar(13) DEFAULT NULL,
  `document_code` varchar(20) DEFAULT NULL,
  `tel_no` varchar(5) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES ('1', 'dep1_gwA', 'กลุ่มงานบริหารทั่วไป', 'gwA', '', 'สธ0834.01.01', null, 'Y');
INSERT INTO `department` VALUES ('2', 'dep2_gwA', 'กลุ่มงานทรัพยากรบุคคล', 'gwA', '3900100582644', 'สธ0834.01.02', '64293', 'Y');
INSERT INTO `department` VALUES ('3', 'dep3_gwA', 'กลุ่มงานการเงินและบัญชี', 'gwA', '3909800103585', null, null, 'Y');
INSERT INTO `department` VALUES ('4', 'dep4_gwA', 'กลุ่มงานพัสดุ', 'gwA', '3909900323943', null, null, 'Y');
INSERT INTO `department` VALUES ('5', 'dep5_gwA', 'กลุ่มงานโครงสร้างพื้นฐานและวิศวกรรมทางการแพทย์', 'gwA', '3120600927095', null, null, 'Y');
INSERT INTO `department` VALUES ('6', 'dep6_gwA', 'กลุ่มงานสารนิเทศและประชาสัมพันธ์', 'gwA', '3540500044724', null, null, 'Y');
INSERT INTO `department` VALUES ('7', 'dep7_gwA', 'กลุ่มงานประกันสุขภาพ', 'gwA', '3900200436747', null, null, 'Y');
INSERT INTO `department` VALUES ('8', 'dep8_gwA', 'กลุ่มงานยุทธศาสตร์และแผนงานโครงการ', 'gwA', '3900300541186', null, null, 'Y');
INSERT INTO `department` VALUES ('9', 'dep9_gwA', 'กลุ่มงานโภชนาการ', 'gwA', '3900700670978', null, null, 'Y');
INSERT INTO `department` VALUES ('10', 'dep10_gwA', 'หน่วยผลิตน้ำ ', 'gwA', '', null, null, 'Y');
INSERT INTO `department` VALUES ('11', 'dep11_gwB', 'กลุ่มงานจิตเวชทั่วไป', 'gwB', '', null, null, 'Y');
INSERT INTO `department` VALUES ('12', 'dep12_gwB', 'กลุ่มงานคลินิกเฉพาะทาง', 'gwB', '', null, null, 'Y');
INSERT INTO `department` VALUES ('13', 'dep13_gwB', 'กลุ่มงานจิตเวชฉุกเฉิน      ', 'gwB', '', null, null, 'Y');
INSERT INTO `department` VALUES ('14', 'dep14_gwB', 'กลุ่มงานจิตเวชสารเสพติด', 'gwB', '', null, null, 'Y');
INSERT INTO `department` VALUES ('15', 'dep15_gwB', 'กลุ่มงานจิตเวชเด็กและวัยรุ่น', 'gwB', '', null, null, 'Y');
INSERT INTO `department` VALUES ('16', 'dep16_gwB', 'กลุ่มงานจิตเวชสูงอายุ', 'gwB', '', null, null, 'Y');
INSERT INTO `department` VALUES ('17', 'dep17_gwB', 'กลุ่มงานนิติจิตเวช', 'gwB', '', null, null, 'Y');
INSERT INTO `department` VALUES ('18', 'dep18_gwB', 'กลุ่มงานการแพทย์', 'gwB', '', null, null, 'Y');
INSERT INTO `department` VALUES ('19', 'dep19_gwB', 'กลุ่มงานทันตกรรม', 'gwB', '3909900458555', null, null, 'Y');
INSERT INTO `department` VALUES ('20', 'dep20_gwB', 'กลุ่มงานเภสัชกรรม', 'gwB', '3900400025473', null, null, 'Y');
INSERT INTO `department` VALUES ('21', 'dep21_gwB', 'กลุ่มงานจิตวิทยา', 'gwB', '3909900359549', null, null, 'Y');
INSERT INTO `department` VALUES ('22', 'dep22_gwB', 'กลุ่มงานสังคมสงเคราะห์', 'gwB', '3930100284236', null, null, 'Y');
INSERT INTO `department` VALUES ('23', 'dep23_gwB', 'กลุ่มงานเทคนิคการแพทย์  ', 'gwB', '', null, null, 'Y');
INSERT INTO `department` VALUES ('24', 'dep24_gwB', 'กลุ่มงานเวชกรรมฟื้นฟู', 'gwB', '1909900156072', null, null, 'Y');
INSERT INTO `department` VALUES ('25', 'dep25_gwB', 'กลุ่มงานรังสีวิทยา', 'gwB', '3900800031446', null, null, 'Y');
INSERT INTO `department` VALUES ('26', 'dep26_gwB', 'กลุ่มงานเวชระเบียน', 'gwB', '3900900121188', null, null, 'Y');
INSERT INTO `department` VALUES ('27', 'dep27_gwB', 'กลุ่มงานพัฒนาคุณภาพบริการและมาตรฐาน ', 'gwB', '', null, null, 'Y');
INSERT INTO `department` VALUES ('28', 'dep28_gwC', 'กลุ่มงานวิจัยและพัฒนา', 'gwC', '4809900008745', null, null, 'Y');
INSERT INTO `department` VALUES ('29', 'dep29_gwC', 'กลุ่มงานฝึกอบรมและวิเทศสัมพันธ์ ', 'gwC', '', null, null, 'Y');
INSERT INTO `department` VALUES ('30', 'dep30_gwC', 'กลุ่มงานเทคโนโลยีสารสนเทศ', 'gwC', '3909900753191', null, null, 'Y');
INSERT INTO `department` VALUES ('31', 'dep31_gwC', 'งานห้องสมุด ', 'gwC', '3259800009216', null, null, 'Y');
INSERT INTO `department` VALUES ('32', 'dep32_gwD', 'กลุ่มงานการพยาบาลผู้ป่วยนอก', 'gwD', '', null, null, 'Y');
INSERT INTO `department` VALUES ('33', 'dep33_gwD', 'กลุ่มงานการพยาบาลผู้ป่วยใน ', 'gwD', '', null, null, 'Y');
INSERT INTO `department` VALUES ('34', 'dep34_gwD', 'กลุ่มงานการพยาบาลผู้ป่วยหนัก', 'gwD', '', null, null, 'Y');
INSERT INTO `department` VALUES ('35', 'dep35_gwD', 'กลุ่มงานการพยาบาลผู้ป่วยจิตเวชฉุกเฉิน', 'gwD', '', null, null, 'Y');
INSERT INTO `department` VALUES ('36', 'dep36_gwD', 'กลุ่มงานการพยาบาลผู้ป่วยรักษาพิเศษ', 'gwD', '', null, null, 'Y');
INSERT INTO `department` VALUES ('37', 'dep37_gwD', 'กลุ่มงานการพยาบาลผู้ป่วยวิสัญญีพยาบาล', 'gwD', '', null, null, 'Y');
INSERT INTO `department` VALUES ('38', 'dep38_gwD', 'กลุ่มงานการพยาบาลด้านการควบคุมและป้องกันการติดเชื้อ', 'gwD', '', null, null, 'Y');
INSERT INTO `department` VALUES ('39', 'dep39_gwD', 'กลุ่มงานวิจัยและพัฒนาทางการพยาบาลจิตเวชสู่ความเป็นเลิศ', 'gwD', '', null, null, 'Y');
INSERT INTO `department` VALUES ('40', 'dep40_gwD', 'กลุ่มงานการพยาบาลสุขภาพจิตและจิตเวชชุมชน', 'gwD', '', null, null, 'Y');
INSERT INTO `department` VALUES ('41', 'dep41_gwE', 'กลุ่มงานพัฒนาศักยภาพเครือข่าย', 'gwE', '', null, null, 'Y');
INSERT INTO `department` VALUES ('42', 'dep42_gwE', 'กลุ่มงานวิกฤตสุขภาพจิต', 'gwE', '', null, null, 'Y');
INSERT INTO `department` VALUES ('43', 'dep43_gwE', 'กลุ่มงานนิเทศติดตามสุขภาพจิตในเขตสุขภาพ', 'gwE', '', null, null, 'Y');
INSERT INTO `department` VALUES ('44', 'dep44_gwA', 'กลุ่มภารกิจอำนวยการ', 'gwA', '3929800114838', null, null, 'Y');
INSERT INTO `department` VALUES ('45', 'dep45_gwB', 'กลุ่มภารกิจบริการจิตเวชและสุขภาพจิต', 'gwB', '3949900026621', null, null, 'Y');
INSERT INTO `department` VALUES ('46', 'dep46_gwC', 'กลุ่มภารกิจพัฒนาสู่ความเป็นเลิศ', 'gwC', '3769900072110', null, null, 'Y');
INSERT INTO `department` VALUES ('47', 'dep47_gwD', 'กลุ่มภารกิจการพยาบาล', 'gwD', '3120100399804', null, null, 'Y');
INSERT INTO `department` VALUES ('48', 'dep48_gwE', 'กลุ่มภารกิจสนับสนุนและพัฒนาเครือข่ายบริการ', 'gwE', '3800100013594', null, null, 'Y');
INSERT INTO `department` VALUES ('49', 'dep49_gwF', 'สำนักงานเลขาผู้อำนวยการ', 'gwF', null, null, null, 'Y');

-- ----------------------------
-- Table structure for department_level
-- ----------------------------
DROP TABLE IF EXISTS `department_level`;
CREATE TABLE `department_level` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `department_level_name` varchar(80) DEFAULT NULL,
  `status_use` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `department_level_name` (`department_level_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of department_level
-- ----------------------------
INSERT INTO `department_level` VALUES ('1', 'หน่วยงานในสังกัดกรมสุขภาพจิต', null);
INSERT INTO `department_level` VALUES ('2', 'หน่วยงานนอกกรมสุขภาพจิต', null);

-- ----------------------------
-- Table structure for dmh_child
-- ----------------------------
DROP TABLE IF EXISTS `dmh_child`;
CREATE TABLE `dmh_child` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `dmh_child_name` varchar(150) DEFAULT NULL,
  `dmh_child_type` varchar(1) DEFAULT NULL,
  `dmh_child_address` varchar(200) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dmh_child
-- ----------------------------
INSERT INTO `dmh_child` VALUES ('1', 'กองสุขภาพจิตสังคม', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('2', 'สำนักงานเลขานุการคณะกรรมการสุขภาพจิตแห่งชาติ (สคสช)', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('3', 'สำนักส่งเสริมและพัฒนาสุขภาพจิต', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('4', 'สำนักงานโครงการ TO BE NUMBER ONE', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('5', 'กลุ่มพัฒนาระบบบริหาร', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('6', 'กองบริหารทรัพยากรบุคคล', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('7', 'กองบริหารการคลัง', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('8', 'กองยุทธศาสตร์และแผนงาน', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('9', 'สำนักงานเลขานุการกรมสุขภาพจิต', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('10', 'กลุ่มตรวจสอบภายใน', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('11', 'กองบริหารระบบบริการสุขภาพจิต', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('12', 'สถาบันสุขภาพจิตเด็กและวัยรุ่นภาคใต้', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('13', 'สถาบันสุขภาพจิตเด็กและวัยรุ่นภาคตะวันออกเฉียงเหนือ', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('14', 'โรงพยาบาลจิตเวชขอนแก่นราชนครินทร์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('15', 'โรงพยาบาลจิตเวชเลยราชนครินทร์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('16', 'โรงพยาบาลจิตเวชสงขลาราชนครินทร์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('17', 'โรงพยาบาลจิตเวชนครพนมราชนครินทร์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('18', 'โรงพยาบาลยุวประสาทไวทโยปถัมภ์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('19', 'สถาบันราชานุกูล', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('20', 'โรงพยาบาลศรีธัญญา', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('21', 'สถาบันพัฒนาการเด็กราชนครินทร์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('22', 'โรงพยาบาลสวนสราญรมย์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('23', 'โรงพยาบาลจิตเวชสระแก้วราชนครินทร์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('24', 'โรงพยาบาลสวนปรุง', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('25', 'โรงพยาบาลพระศรีมหาโพธิ์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('26', 'โรงพยาบาลจิตเวชนครราชสีมาราชนครินทร์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('27', 'โรงพยาบาลจิตเวชนครสวรรค์ราชนครินทร์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('28', 'สถาบันสุขภาพจิตเด็กและวัยรุ่นราชนครินทร์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('29', 'สถาบันกัลยาณ์ราชนครินทร์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('30', 'สถาบันจิตเวชศาสตร์สมเด็จเจ้าพระยา', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('31', 'โรงพยาบาลจิตเวชขอนแก่นราชนครินทร์', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('32', 'ศูนย์สุขภาพจิตที่ 1', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('33', 'ศูนย์สุขภาพจิตที่ 2', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('34', 'ศูนย์สุขภาพจิตที่ 3', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('35', 'ศูนย์สุขภาพจิตที่ 4', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('36', 'ศูนย์สุขภาพจิตที่ 5', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('37', 'ศูนย์สุขภาพจิตที่ 6', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('38', 'ศูนย์สุขภาพจิตที่ 7', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('39', 'ศูนย์สุขภาพจิตที่ 8', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('40', 'ศูนย์สุขภาพจิตที่ 9', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('41', 'ศูนย์สุขภาพจิตที่ 10', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('42', 'ศูนย์สุขภาพจิตที่ 11', null, null, 'Y');
INSERT INTO `dmh_child` VALUES ('43', 'ศูนย์สุขภาพจิตที่ 12', null, null, 'Y');

-- ----------------------------
-- Table structure for document_number
-- ----------------------------
DROP TABLE IF EXISTS `document_number`;
CREATE TABLE `document_number` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `document_code` varchar(20) DEFAULT NULL,
  `document_no_0` varchar(7) DEFAULT NULL,
  `document_no_1` varchar(2) DEFAULT NULL,
  `document_no_2` varchar(2) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of document_number
-- ----------------------------
INSERT INTO `document_number` VALUES ('1', 'สธ0834.01.01', 'สธ0834', '01', '01', 'Y');
INSERT INTO `document_number` VALUES ('2', 'สธ0834.01.02', 'สธ0834', '01', '02', 'Y');
INSERT INTO `document_number` VALUES ('3', 'สธ0834.01.03', 'สธ0834', '01', '03', 'Y');
INSERT INTO `document_number` VALUES ('4', 'สธ0834.01.04', 'สธ0834', '01', '04', 'Y');
INSERT INTO `document_number` VALUES ('5', 'สธ0834.01.05', 'สธ0834', '01', '05', 'Y');
INSERT INTO `document_number` VALUES ('6', 'สธ0834.01.06', 'สธ0834', '01', '06', 'Y');
INSERT INTO `document_number` VALUES ('7', 'สธ0834.01.07', 'สธ0834', '01', '07', 'Y');
INSERT INTO `document_number` VALUES ('8', 'สธ0834.01.08', 'สธ0834', '01', '08', 'Y');
INSERT INTO `document_number` VALUES ('9', 'สธ0834.01.09', 'สธ0834', '01', '09', 'Y');
INSERT INTO `document_number` VALUES ('10', 'สธ0834.01.10', 'สธ0834', '01', '10', 'Y');
INSERT INTO `document_number` VALUES ('11', 'สธ0834.01.11', 'สธ0834', '01', '11', 'Y');
INSERT INTO `document_number` VALUES ('12', 'สธ0834.01.12', 'สธ0834', '01', '12', 'Y');
INSERT INTO `document_number` VALUES ('13', 'สธ0834.01.13', 'สธ0834', '01', '13', 'Y');
INSERT INTO `document_number` VALUES ('14', 'สธ0834.01.14', 'สธ0834', '01', '14', 'Y');
INSERT INTO `document_number` VALUES ('15', 'สธ0834.01.15', 'สธ0834', '01', '15', 'Y');
INSERT INTO `document_number` VALUES ('16', 'สธ0834.01.16', 'สธ0834', '01', '16', 'Y');
INSERT INTO `document_number` VALUES ('17', 'สธ0834.01.17', 'สธ0834', '01', '17', 'Y');
INSERT INTO `document_number` VALUES ('18', 'สธ0834.01.18', 'สธ0834', '01', '18', 'Y');
INSERT INTO `document_number` VALUES ('19', 'สธ0834.01.19', 'สธ0834', '01', '19', 'Y');
INSERT INTO `document_number` VALUES ('20', 'สธ0834.01.20', 'สธ0834', '01', '20', 'Y');
INSERT INTO `document_number` VALUES ('21', 'สธ0834.01.21', 'สธ0834', '01', '21', 'Y');
INSERT INTO `document_number` VALUES ('22', 'สธ0834.01.22', 'สธ0834', '01', '22', 'Y');
INSERT INTO `document_number` VALUES ('23', 'สธ0834.01.23', 'สธ0834', '01', '23', 'Y');
INSERT INTO `document_number` VALUES ('24', 'สธ0834.01.24', 'สธ0834', '01', '24', 'Y');
INSERT INTO `document_number` VALUES ('25', 'สธ0834.01.25', 'สธ0834', '01', '25', 'Y');
INSERT INTO `document_number` VALUES ('26', 'สธ0834.01.26', 'สธ0834', '01', '26', 'Y');
INSERT INTO `document_number` VALUES ('27', 'สธ0834.01.27', 'สธ0834', '01', '27', 'Y');
INSERT INTO `document_number` VALUES ('28', 'สธ0834.01.28', 'สธ0834', '01', '28', 'Y');
INSERT INTO `document_number` VALUES ('29', 'สธ0834.01.29', 'สธ0834', '01', '29', 'Y');
INSERT INTO `document_number` VALUES ('30', 'สธ0834.01.30', 'สธ0834', '01', '30', 'Y');
INSERT INTO `document_number` VALUES ('31', 'สธ0834.02.01', 'สธ0834', '02', '01', 'Y');
INSERT INTO `document_number` VALUES ('32', 'สธ0834.02.02', 'สธ0834', '02', '02', 'Y');
INSERT INTO `document_number` VALUES ('33', 'สธ0834.02.03', 'สธ0834', '02', '03', 'Y');
INSERT INTO `document_number` VALUES ('34', 'สธ0834.02.04', 'สธ0834', '02', '04', 'Y');
INSERT INTO `document_number` VALUES ('35', 'สธ0834.02.05', 'สธ0834', '02', '05', 'Y');
INSERT INTO `document_number` VALUES ('36', 'สธ0834.02.06', 'สธ0834', '02', '06', 'Y');
INSERT INTO `document_number` VALUES ('37', 'สธ0834.02.07', 'สธ0834', '02', '07', 'Y');
INSERT INTO `document_number` VALUES ('38', 'สธ0834.02.08', 'สธ0834', '02', '08', 'Y');
INSERT INTO `document_number` VALUES ('39', 'สธ0834.02.09', 'สธ0834', '02', '09', 'Y');
INSERT INTO `document_number` VALUES ('40', 'สธ0834.02.10', 'สธ0834', '02', '10', 'Y');
INSERT INTO `document_number` VALUES ('41', 'สธ0834.02.11', 'สธ0834', '02', '11', 'Y');
INSERT INTO `document_number` VALUES ('42', 'สธ0834.02.12', 'สธ0834', '02', '12', 'Y');
INSERT INTO `document_number` VALUES ('43', 'สธ0834.02.13', 'สธ0834', '02', '13', 'Y');
INSERT INTO `document_number` VALUES ('44', 'สธ0834.02.14', 'สธ0834', '02', '14', 'Y');
INSERT INTO `document_number` VALUES ('45', 'สธ0834.02.15', 'สธ0834', '02', '15', 'Y');
INSERT INTO `document_number` VALUES ('46', 'สธ0834.02.16', 'สธ0834', '02', '16', 'Y');
INSERT INTO `document_number` VALUES ('47', 'สธ0834.02.17', 'สธ0834', '02', '17', 'Y');
INSERT INTO `document_number` VALUES ('48', 'สธ0834.02.18', 'สธ0834', '02', '18', 'Y');
INSERT INTO `document_number` VALUES ('49', 'สธ0834.02.19', 'สธ0834', '02', '19', 'Y');
INSERT INTO `document_number` VALUES ('50', 'สธ0834.02.20', 'สธ0834', '02', '20', 'Y');
INSERT INTO `document_number` VALUES ('51', 'สธ0834.02.21', 'สธ0834', '02', '21', 'Y');
INSERT INTO `document_number` VALUES ('52', 'สธ0834.02.22', 'สธ0834', '02', '22', 'Y');
INSERT INTO `document_number` VALUES ('53', 'สธ0834.02.23', 'สธ0834', '02', '23', 'Y');
INSERT INTO `document_number` VALUES ('54', 'สธ0834.02.24', 'สธ0834', '02', '24', 'Y');
INSERT INTO `document_number` VALUES ('55', 'สธ0834.02.25', 'สธ0834', '02', '25', 'Y');
INSERT INTO `document_number` VALUES ('56', 'สธ0834.02.26', 'สธ0834', '02', '26', 'Y');
INSERT INTO `document_number` VALUES ('57', 'สธ0834.02.27', 'สธ0834', '02', '27', 'Y');
INSERT INTO `document_number` VALUES ('58', 'สธ0834.02.28', 'สธ0834', '02', '28', 'Y');
INSERT INTO `document_number` VALUES ('59', 'สธ0834.02.29', 'สธ0834', '02', '29', 'Y');
INSERT INTO `document_number` VALUES ('60', 'สธ0834.02.30', 'สธ0834', '02', '30', 'Y');
INSERT INTO `document_number` VALUES ('61', 'สธ0834.03.01', 'สธ0834', '03', '01', 'Y');
INSERT INTO `document_number` VALUES ('62', 'สธ0834.03.02', 'สธ0834', '03', '02', 'Y');
INSERT INTO `document_number` VALUES ('63', 'สธ0834.03.03', 'สธ0834', '03', '03', 'Y');
INSERT INTO `document_number` VALUES ('64', 'สธ0834.03.04', 'สธ0834', '03', '04', 'Y');
INSERT INTO `document_number` VALUES ('65', 'สธ0834.03.05', 'สธ0834', '03', '05', 'Y');
INSERT INTO `document_number` VALUES ('66', 'สธ0834.03.06', 'สธ0834', '03', '06', 'Y');
INSERT INTO `document_number` VALUES ('67', 'สธ0834.03.07', 'สธ0834', '03', '07', 'Y');
INSERT INTO `document_number` VALUES ('68', 'สธ0834.03.08', 'สธ0834', '03', '08', 'Y');
INSERT INTO `document_number` VALUES ('69', 'สธ0834.03.09', 'สธ0834', '03', '09', 'Y');
INSERT INTO `document_number` VALUES ('70', 'สธ0834.03.10', 'สธ0834', '03', '10', 'Y');
INSERT INTO `document_number` VALUES ('71', 'สธ0834.03.11', 'สธ0834', '03', '11', 'Y');
INSERT INTO `document_number` VALUES ('72', 'สธ0834.03.12', 'สธ0834', '03', '12', 'Y');
INSERT INTO `document_number` VALUES ('73', 'สธ0834.03.13', 'สธ0834', '03', '13', 'Y');
INSERT INTO `document_number` VALUES ('74', 'สธ0834.03.14', 'สธ0834', '03', '14', 'Y');
INSERT INTO `document_number` VALUES ('75', 'สธ0834.03.15', 'สธ0834', '03', '15', 'Y');
INSERT INTO `document_number` VALUES ('76', 'สธ0834.03.16', 'สธ0834', '03', '16', 'Y');
INSERT INTO `document_number` VALUES ('77', 'สธ0834.03.17', 'สธ0834', '03', '17', 'Y');
INSERT INTO `document_number` VALUES ('78', 'สธ0834.03.18', 'สธ0834', '03', '18', 'Y');
INSERT INTO `document_number` VALUES ('79', 'สธ0834.03.19', 'สธ0834', '03', '19', 'Y');
INSERT INTO `document_number` VALUES ('80', 'สธ0834.03.20', 'สธ0834', '03', '20', 'Y');
INSERT INTO `document_number` VALUES ('81', 'สธ0834.03.21', 'สธ0834', '03', '21', 'Y');
INSERT INTO `document_number` VALUES ('82', 'สธ0834.03.22', 'สธ0834', '03', '22', 'Y');
INSERT INTO `document_number` VALUES ('83', 'สธ0834.03.23', 'สธ0834', '03', '23', 'Y');
INSERT INTO `document_number` VALUES ('84', 'สธ0834.03.24', 'สธ0834', '03', '24', 'Y');
INSERT INTO `document_number` VALUES ('85', 'สธ0834.03.25', 'สธ0834', '03', '25', 'Y');
INSERT INTO `document_number` VALUES ('86', 'สธ0834.03.26', 'สธ0834', '03', '26', 'Y');
INSERT INTO `document_number` VALUES ('87', 'สธ0834.03.27', 'สธ0834', '03', '27', 'Y');
INSERT INTO `document_number` VALUES ('88', 'สธ0834.03.28', 'สธ0834', '03', '28', 'Y');
INSERT INTO `document_number` VALUES ('89', 'สธ0834.03.29', 'สธ0834', '03', '29', 'Y');
INSERT INTO `document_number` VALUES ('90', 'สธ0834.03.30', 'สธ0834', '03', '30', 'Y');
INSERT INTO `document_number` VALUES ('91', 'สธ0834.04.01', 'สธ0834', '04', '01', 'Y');
INSERT INTO `document_number` VALUES ('92', 'สธ0834.04.02', 'สธ0834', '04', '02', 'Y');
INSERT INTO `document_number` VALUES ('93', 'สธ0834.04.03', 'สธ0834', '04', '03', 'Y');
INSERT INTO `document_number` VALUES ('94', 'สธ0834.04.04', 'สธ0834', '04', '04', 'Y');
INSERT INTO `document_number` VALUES ('95', 'สธ0834.04.05', 'สธ0834', '04', '05', 'Y');
INSERT INTO `document_number` VALUES ('96', 'สธ0834.04.06', 'สธ0834', '04', '06', 'Y');
INSERT INTO `document_number` VALUES ('97', 'สธ0834.04.07', 'สธ0834', '04', '07', 'Y');
INSERT INTO `document_number` VALUES ('98', 'สธ0834.04.08', 'สธ0834', '04', '08', 'Y');
INSERT INTO `document_number` VALUES ('99', 'สธ0834.04.09', 'สธ0834', '04', '09', 'Y');
INSERT INTO `document_number` VALUES ('100', 'สธ0834.04.10', 'สธ0834', '04', '10', 'Y');
INSERT INTO `document_number` VALUES ('101', 'สธ0834.04.11', 'สธ0834', '04', '11', 'Y');
INSERT INTO `document_number` VALUES ('102', 'สธ0834.04.12', 'สธ0834', '04', '12', 'Y');
INSERT INTO `document_number` VALUES ('103', 'สธ0834.04.13', 'สธ0834', '04', '13', 'Y');
INSERT INTO `document_number` VALUES ('104', 'สธ0834.04.14', 'สธ0834', '04', '14', 'Y');
INSERT INTO `document_number` VALUES ('105', 'สธ0834.04.15', 'สธ0834', '04', '15', 'Y');
INSERT INTO `document_number` VALUES ('106', 'สธ0834.04.16', 'สธ0834', '04', '16', 'Y');
INSERT INTO `document_number` VALUES ('107', 'สธ0834.04.17', 'สธ0834', '04', '17', 'Y');
INSERT INTO `document_number` VALUES ('108', 'สธ0834.04.18', 'สธ0834', '04', '18', 'Y');
INSERT INTO `document_number` VALUES ('109', 'สธ0834.04.19', 'สธ0834', '04', '19', 'Y');
INSERT INTO `document_number` VALUES ('110', 'สธ0834.04.20', 'สธ0834', '04', '20', 'Y');
INSERT INTO `document_number` VALUES ('111', 'สธ0834.04.21', 'สธ0834', '04', '21', 'Y');
INSERT INTO `document_number` VALUES ('112', 'สธ0834.04.22', 'สธ0834', '04', '22', 'Y');
INSERT INTO `document_number` VALUES ('113', 'สธ0834.04.23', 'สธ0834', '04', '23', 'Y');
INSERT INTO `document_number` VALUES ('114', 'สธ0834.04.24', 'สธ0834', '04', '24', 'Y');
INSERT INTO `document_number` VALUES ('115', 'สธ0834.04.25', 'สธ0834', '04', '25', 'Y');
INSERT INTO `document_number` VALUES ('116', 'สธ0834.04.26', 'สธ0834', '04', '26', 'Y');
INSERT INTO `document_number` VALUES ('117', 'สธ0834.04.27', 'สธ0834', '04', '27', 'Y');
INSERT INTO `document_number` VALUES ('118', 'สธ0834.04.28', 'สธ0834', '04', '28', 'Y');
INSERT INTO `document_number` VALUES ('119', 'สธ0834.04.29', 'สธ0834', '04', '29', 'Y');
INSERT INTO `document_number` VALUES ('120', 'สธ0834.04.30', 'สธ0834', '04', '30', 'Y');
INSERT INTO `document_number` VALUES ('121', 'สธ0834.05.01', 'สธ0834', '05', '01', 'Y');
INSERT INTO `document_number` VALUES ('122', 'สธ0834.05.02', 'สธ0834', '05', '02', 'Y');
INSERT INTO `document_number` VALUES ('123', 'สธ0834.05.03', 'สธ0834', '05', '03', 'Y');
INSERT INTO `document_number` VALUES ('124', 'สธ0834.05.04', 'สธ0834', '05', '04', 'Y');
INSERT INTO `document_number` VALUES ('125', 'สธ0834.05.05', 'สธ0834', '05', '05', 'Y');
INSERT INTO `document_number` VALUES ('126', 'สธ0834.05.06', 'สธ0834', '05', '06', 'Y');
INSERT INTO `document_number` VALUES ('127', 'สธ0834.05.07', 'สธ0834', '05', '07', 'Y');
INSERT INTO `document_number` VALUES ('128', 'สธ0834.05.08', 'สธ0834', '05', '08', 'Y');
INSERT INTO `document_number` VALUES ('129', 'สธ0834.05.09', 'สธ0834', '05', '09', 'Y');
INSERT INTO `document_number` VALUES ('130', 'สธ0834.05.10', 'สธ0834', '05', '10', 'Y');
INSERT INTO `document_number` VALUES ('131', 'สธ0834.05.11', 'สธ0834', '05', '11', 'Y');
INSERT INTO `document_number` VALUES ('132', 'สธ0834.05.12', 'สธ0834', '05', '12', 'Y');
INSERT INTO `document_number` VALUES ('133', 'สธ0834.05.13', 'สธ0834', '05', '13', 'Y');
INSERT INTO `document_number` VALUES ('134', 'สธ0834.05.14', 'สธ0834', '05', '14', 'Y');
INSERT INTO `document_number` VALUES ('135', 'สธ0834.05.15', 'สธ0834', '05', '15', 'Y');
INSERT INTO `document_number` VALUES ('136', 'สธ0834.05.16', 'สธ0834', '05', '16', 'Y');
INSERT INTO `document_number` VALUES ('137', 'สธ0834.05.17', 'สธ0834', '05', '17', 'Y');
INSERT INTO `document_number` VALUES ('138', 'สธ0834.05.18', 'สธ0834', '05', '18', 'Y');
INSERT INTO `document_number` VALUES ('139', 'สธ0834.05.19', 'สธ0834', '05', '19', 'Y');
INSERT INTO `document_number` VALUES ('140', 'สธ0834.05.20', 'สธ0834', '05', '20', 'Y');
INSERT INTO `document_number` VALUES ('141', 'สธ0834.05.21', 'สธ0834', '05', '21', 'Y');
INSERT INTO `document_number` VALUES ('142', 'สธ0834.05.22', 'สธ0834', '05', '22', 'Y');
INSERT INTO `document_number` VALUES ('143', 'สธ0834.05.23', 'สธ0834', '05', '23', 'Y');
INSERT INTO `document_number` VALUES ('144', 'สธ0834.05.24', 'สธ0834', '05', '24', 'Y');
INSERT INTO `document_number` VALUES ('145', 'สธ0834.05.25', 'สธ0834', '05', '25', 'Y');
INSERT INTO `document_number` VALUES ('146', 'สธ0834.05.26', 'สธ0834', '05', '26', 'Y');
INSERT INTO `document_number` VALUES ('147', 'สธ0834.05.27', 'สธ0834', '05', '27', 'Y');
INSERT INTO `document_number` VALUES ('148', 'สธ0834.05.28', 'สธ0834', '05', '28', 'Y');
INSERT INTO `document_number` VALUES ('149', 'สธ0834.05.29', 'สธ0834', '05', '29', 'Y');
INSERT INTO `document_number` VALUES ('150', 'สธ0834.05.30', 'สธ0834', '05', '30', 'Y');

-- ----------------------------
-- Table structure for gogov
-- ----------------------------
DROP TABLE IF EXISTS `gogov`;
CREATE TABLE `gogov` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `officialdoc_num` varchar(3) DEFAULT NULL COMMENT 'เลขที่หนังสือ(เลขrunning)',
  `gogov_one_or_group` varchar(1) DEFAULT NULL COMMENT 'ไปราชการคนเดียวหรือหมู่คณะ 1=คนเดียว 2=หมู่คณะ',
  `gogov_group_num` varchar(2) DEFAULT NULL COMMENT 'จำนวนคนที่ไป(กรณีเดินทางเป็นหมู่คณะ)',
  `gogov_group_id13` text COMMENT 'เลข13หลักของคณะเดินทาง(กรณีเดินทางเป็นหมู่คณะ)',
  `topic` varchar(150) DEFAULT NULL COMMENT 'ชื่อเรื่อง/ชื่อโครงการที่ขออนุมัติเดินทางไปราชการ',
  `project_date_begin` date DEFAULT NULL COMMENT 'วันที่เริ่มโครงการ',
  `project_date_end` date DEFAULT NULL COMMENT 'วันที่สิ้นสุดโครงการ',
  `project_int_ext` varchar(1) DEFAULT NULL COMMENT 'ผู้จัดเป็นหน่วยงานในกรมสุขภาพจิต หรือ นอกกรมสุขภาพจิต 1 ใน 2 นอก',
  `project_int_dmh_child_code` varchar(2) DEFAULT NULL COMMENT 'รหัสหน่วยงานในสังกัดกรมสุขภาพจิต (ใช้กรณีผู้จัดอยู่ในสังกัดกรมสุขภาพจิต)',
  `project_ext_name` text COMMENT 'ชื่อหน่วยงานภายนอก(นอกสังกัดกรมสุขภาพจิต ที่จัดโครงการ)',
  `gogov_place` varchar(150) DEFAULT NULL COMMENT 'ไปราชการ ณ',
  `gogov_date_depart` date DEFAULT NULL COMMENT 'วันเริ่มเดินทาง(ไม่นับวันลา)',
  `gogov_date_arrive` date DEFAULT NULL COMMENT 'วันสิ้นสุดเดินทาง(ไม่นับวันลา)',
  `budget_type` varchar(1) DEFAULT NULL COMMENT '1 = เบิกค่าเดินทางจากเงินบำรุง 2  = เบิกค่าเดินทางจากเงินงบประมาณ 3  = เบิกค่าเดินทางจากเงินโครงการ 4  = เบิกค่าเดินทางจากทุนส่วนตัว',
  `budget_type2_name` varchar(50) DEFAULT NULL COMMENT 'เบิกค่าเดินทางจาก เงินงบประมาณ หมวดอะไร?',
  `budget_type3_name` varchar(80) DEFAULT NULL COMMENT 'เบิกค่าเดินทางจาก เงินโครงการ ชื่อโครงการอะไร',
  `gogov_by` varchar(1) DEFAULT NULL COMMENT 'เดินทางโดยอะไร 1=รถโดยสารประจำทาง 2=รถไฟ 3=เครื่องบิน 4=รถยนต์ส่วนตัว 5=รถยนต์ส่วนกลาง',
  `gogov_by4` varchar(10) DEFAULT NULL COMMENT 'ทะเบียนรถยนต์ส่วนตัว',
  `gogov_by5` varchar(10) DEFAULT NULL COMMENT 'ทะเบียนรถยนต์ส่วนกลาง',
  `code_province_depart_go` varchar(2) DEFAULT NULL COMMENT 'codeจังหวัด ขาไปจาก(จังหวัดอะไร)',
  `code_province_arrive_go` varchar(2) DEFAULT NULL COMMENT 'codeจังหวัด ขาไปถึง(จังหวัดอะไร)',
  `code_province_depart_return` varchar(2) DEFAULT NULL COMMENT 'codeจังหวัด ขากลับจาก(จังหวัดอะไร)',
  `code_province_arrive_return` varchar(2) DEFAULT NULL COMMENT 'codeจังหวัด ขากลับมาถึง(จังหวัดอะไร)',
  `money_type` text COMMENT '1 = ค่าเบี้ยเลี้ยง,2 =ค่าที่พัก,3 =ค่าพาหนะ ,4 = ค่าลงทะเบียน,5 = ค่าใช้จ่ายอื่นๆ 6= ไม่ขอเบิกค่าใช้จ่าย',
  `money_type1` varchar(12) DEFAULT NULL COMMENT 'ค่าเบี้ยเลี้ยง(บาท)',
  `money_type2` varchar(12) DEFAULT NULL COMMENT 'ค่าที่พัก(บาท)',
  `money_type3` varchar(12) DEFAULT NULL COMMENT 'ค่าพาหนะ(บาท)',
  `money_type4` varchar(12) DEFAULT NULL COMMENT 'ค่าลงทะเบียน(บาท)',
  `money_type5` varchar(12) DEFAULT NULL COMMENT 'ค่าใช้จ่ายอื่นๆ(บาท)',
  `attachedfile1` varchar(80) DEFAULT NULL COMMENT 'ไฟล์แนบ(หนังสือเชิญ)',
  `attachedfile2` varchar(80) DEFAULT NULL COMMENT 'ไฟล์แนบ(เอกสารโครงการ)',
  `json_for_edit` text COMMENT 'json สำหรับแก้ไขข้อมูล',
  `json_for_print` text COMMENT 'json สำหรับ print ข้อมูล',
  `datetime_add` datetime DEFAULT NULL,
  `personid13_add` varchar(13) DEFAULT NULL COMMENT 'id13บุคลากรที่เขียนบันทึกไปราชการฉบับนี้',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gogov
-- ----------------------------
INSERT INTO `gogov` VALUES ('1', '145', '2', '3', 'Array', 'ไปราชการเรื่อง', '0000-00-00', '0000-00-00', null, null, null, 'ไปราชการ ณ', '0000-00-00', '0000-00-00', '2', 'หมวดปป', '', '5', '', 'ทะเบียนรถย', '01', '02', '03', '04', 'A', '฿100', '฿200', '฿300', '฿400', '฿500', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('2', '145', '2', '3', '3100503310364', 'ไปราชการเรื่อง', '0000-00-00', '0000-00-00', null, null, null, 'ไปราชการ ณ', '0000-00-00', '0000-00-00', '2', 'หมวดปป', '', '5', '', 'ทะเบียนรถย', '01', '02', '03', '04', 'A', '฿100', '฿200', '฿300', '฿400', '฿500', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('3', '145', '2', '3', '3100503310364', 'ไปราชการเรื่อง', '0000-00-00', '0000-00-00', null, null, null, 'ไปราชการ ณ', '0000-00-00', '0000-00-00', '2', 'หมวดปป', '', '5', '', 'ทะเบียนรถย', '01', '02', '03', '04', 'A', '฿100', '฿200', '฿300', '฿400', '฿500', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('4', '', '2', '3', '3100503310364', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('5', '', '2', '3', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('6', '', '2', '3', '3900300382606', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('7', '', '2', '3', '3100503310364', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('8', '', '2', '3', '3100503310364', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('9', '', '2', '3', '3100503310364', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('10', '', '2', '3', '3100503310364', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('11', '', '2', '3', '1849900108460', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('12', '', '2', '3', '1', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('13', '', '2', '3', '[\"18499001084', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('14', '', '2', '3', '[\"1849900108460\",\"3900300382606\",\"3900300437460\"]', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('15', '', '2', '3', '[\"1849900108460\",\"3900300382606\",\"3900300437460\"]', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('16', '', '2', '2', '[\"3901101040129\",\"3929800114838\"]', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('17', '', '2', '2', '[\"3901101040129\",\"3929800114838\"]', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('18', '', '', '', 'null', '', '2018-07-04', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('19', '', '', '', 'null', '', '2018-07-05', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('20', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('21', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('22', '', '', '', 'null', '', '2018-06-05', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('23', '', '', '', 'null', '', '2018-07-05', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('24', '', '', '', 'null', '', '2018-01-01', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('25', '', '', '', 'null', '', '2017-12-31', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('26', '', '', '', 'null', '', '2018-07-06', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('27', '156', '1', '', 'null', 'a', '2018-07-06', '0000-00-00', null, null, null, 'd', '0000-00-00', '0000-00-00', '2', 'sdf', '', '4', '5512', '', '03', '02', '05', '05', 'A', '฿100', '฿200', '฿300', '฿450', '฿454', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('28', '156', '1', '', 'null', 'a', '2018-07-06', '0000-00-00', null, null, null, 'd', '0000-00-00', '0000-00-00', '2', 'sdf', '', '4', '5512', '', '03', '02', '05', '05', 'A', '฿100', '฿200', '฿300', '฿450', '฿454', null, null, '{\"child1_txt\":\"156\",\"child2_rdo\":\"1\",\"child2_txt\":\"\",\"child4_txt\":\"a\",\"child5_txt1\":\"2018-7-6\",\"child5_txt2\":\"12 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child6_txt\":\"d\",\"child7_txt1\":\"16 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child7_txt2\":\"27 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child81_rdo\":\"2\",\"child81_txt1\":\"sdf\",\"child81_txt2\":\"\",\"child82_rdo\":\"4\",\"child82_txt1\":\"5512\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"02\",\"child9_select2\":\"05\",\"child9_select3\":\"05\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"u0e3f100\",\"child10_txt2\":\"u0e3f200\",\"child10_txt3\":\"u0e3f300\",\"child10_txt4\":\"u0e3f450\",\"child10_txt5\":\"u0e3f454,545\",\"child11_chkbox\":[\"1\",\"2\"]}', null, null, null);
INSERT INTO `gogov` VALUES ('29', '156', '1', '', 'null', 'a', '2018-07-06', '0000-00-00', null, null, null, 'd', '0000-00-00', '0000-00-00', '2', 'sdf', '', '4', '5512', '', '03', '02', '05', '05', 'A', '฿100', '฿200', '฿300', '฿450', '฿454', null, null, '{\"child1_txt\":\"156\",\"child2_rdo\":\"1\",\"child2_txt\":\"\",\"child4_txt\":\"a\",\"child5_txt1\":\"2018-7-6\",\"child5_txt2\":\"12 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child6_txt\":\"d\",\"child7_txt1\":\"16 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child7_txt2\":\"27 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child81_rdo\":\"2\",\"child81_txt1\":\"sdf\",\"child81_txt2\":\"\",\"child82_rdo\":\"4\",\"child82_txt1\":\"5512\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"02\",\"child9_select2\":\"05\",\"child9_select3\":\"05\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"u0e3f100\",\"child10_txt2\":\"u0e3f200\",\"child10_txt3\":\"u0e3f300\",\"child10_txt4\":\"u0e3f450\",\"child10_txt5\":\"u0e3f454,545\",\"child11_chkbox\":[\"1\",\"2\"]}', null, null, null);
INSERT INTO `gogov` VALUES ('30', 'เลข', '2', '2', '[\"3100503310364\",\"1929900184939\"]', 'ไปราชการเรื่อง', '2018-07-06', '0000-00-00', null, null, null, 'ไปราชการ ณ', '0000-00-00', '0000-00-00', '2', 'หมวด งปม', '', '4', 'กม7896', '', '', '', '', '', 'A', '฿100', '฿200', '฿300', '฿400', '฿500', null, null, '{\"child1_txt\":\"u0e40u0e25u0e02u0e2bu0e19u0e31u0e07u0e2au0e37u0e2d\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"3100503310364\",\"1929900184939\"],\"child4_txt\":\"u0e44u0e1bu0e23u0e32u0e0au0e01u0e32u0e23u0e40u0e23u0e37u0e48u0e2du0e07\",\"child5_txt1\":\"2018-7-6\",\"child5_txt2\":\"9 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child6_txt\":\"u0e44u0e1bu0e23u0e32u0e0au0e01u0e32u0e23 u0e13\",\"child7_txt1\":\"5 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child7_txt2\":\"10 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child81_rdo\":\"2\",\"child81_txt1\":\"u0e2bu0e21u0e27u0e14 u0e07u0e1bu0e21\",\"child81_txt2\":\"\",\"child82_rdo\":\"4\",\"child82_txt1\":\"u0e01u0e217896\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"u0e3f100\",\"child10_txt2\":\"u0e3f200\",\"child10_txt3\":\"u0e3f300\",\"child10_txt4\":\"u0e3f400\",\"child10_txt5\":\"u0e3f500\",\"child11_chkbox\":[\"1\",\"2\"]}', null, null, null);
INSERT INTO `gogov` VALUES ('31', 'เลข', '2', '2', '[\"3100503310364\",\"1929900184939\"]', 'ไปราชการเรื่อง', '2018-07-06', '0000-00-00', null, null, null, 'ไปราชการ ณ', '0000-00-00', '0000-00-00', '2', 'หมวด งปม', '', '4', 'กม7896', '', '', '', '', '', 'A', '฿100', '฿200', '฿300', '฿400', '฿500', null, null, '{\"child1_txt\":\"u0e40u0e25u0e02u0e2bu0e19u0e31u0e07u0e2au0e37u0e2d\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"3100503310364\",\"1929900184939\"],\"child4_txt\":\"u0e44u0e1bu0e23u0e32u0e0au0e01u0e32u0e23u0e40u0e23u0e37u0e48u0e2du0e07\",\"child5_txt1\":\"2018-7-6\",\"child5_txt2\":\"9 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child6_txt\":\"u0e44u0e1bu0e23u0e32u0e0au0e01u0e32u0e23 u0e13\",\"child7_txt1\":\"5 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child7_txt2\":\"10 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child81_rdo\":\"2\",\"child81_txt1\":\"u0e2bu0e21u0e27u0e14 u0e07u0e1bu0e21\",\"child81_txt2\":\"\",\"child82_rdo\":\"4\",\"child82_txt1\":\"u0e01u0e217896\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"u0e3f100\",\"child10_txt2\":\"u0e3f200\",\"child10_txt3\":\"u0e3f300\",\"child10_txt4\":\"u0e3f400\",\"child10_txt5\":\"u0e3f500\",\"child11_chkbox\":[\"1\",\"2\"]}', null, null, null);
INSERT INTO `gogov` VALUES ('32', '145', '2', '2', '[\"3909900753191\",\"3900300437460\"]', 'ไปราชการเรื่อง', '2018-07-04', '0000-00-00', null, null, null, 'ไปราชการ ณ', '0000-00-00', '0000-00-00', '3', '', 'ชื่อโครงการ', '4', 'กม2555', '', '05', '03', '08', '04', 'A', '฿10', '฿20', '฿30', '฿40', '฿50', null, null, '{\"child1_txt\":\"145\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"3909900753191\",\"3900300437460\"],\"child4_txt\":\"u0e44u0e1bu0e23u0e32u0e0au0e01u0e32u0e23u0e40u0e23u0e37u0e48u0e2du0e07\",\"child5_txt1\":\"2018-7-4\",\"child5_txt2\":\"7 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child6_txt\":\"u0e44u0e1bu0e23u0e32u0e0au0e01u0e32u0e23 u0e13\",\"child7_txt1\":\"5 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child7_txt2\":\"16 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child81_txt1\":\"\",\"child81_rdo\":\"3\",\"child81_txt2\":\"u0e0au0e37u0e48u0e2du0e42u0e04u0e23u0e07u0e01u0e32u0e23\",\"child82_rdo\":\"4\",\"child82_txt1\":\"u0e01u0e212555\",\"child82_txt2\":\"\",\"child9_select0\":\"05\",\"child9_select1\":\"03\",\"child9_select2\":\"08\",\"child9_select3\":\"04\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"u0e3f10\",\"child10_txt2\":\"u0e3f20\",\"child10_txt3\":\"u0e3f30\",\"child10_txt4\":\"u0e3f40\",\"child10_txt5\":\"u0e3f50\",\"child11_chkbox\":[\"1\",\"2\"]}', null, null, null);
INSERT INTO `gogov` VALUES ('33', '145', '2', '2', '[\"3909900753191\",\"3900300437460\"]', 'ไปราชการเรื่อง', '2018-07-04', '0000-00-00', null, null, null, 'ไปราชการ ณ', '0000-00-00', '0000-00-00', '3', '', 'ชื่อโครงการ', '4', 'กม2555', '', '05', '03', '08', '04', 'A', '฿10', '฿20', '฿30', '฿40', '฿50', null, null, '{\"child1_txt\":\"145\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"3909900753191\",\"3900300437460\"],\"child4_txt\":\"u0e44u0e1bu0e23u0e32u0e0au0e01u0e32u0e23u0e40u0e23u0e37u0e48u0e2du0e07\",\"child5_txt1\":\"2018-7-4\",\"child5_txt2\":\"7 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child6_txt\":\"u0e44u0e1bu0e23u0e32u0e0au0e01u0e32u0e23 u0e13\",\"child7_txt1\":\"5 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child7_txt2\":\"16 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child81_txt1\":\"\",\"child81_rdo\":\"3\",\"child81_txt2\":\"u0e0au0e37u0e48u0e2du0e42u0e04u0e23u0e07u0e01u0e32u0e23\",\"child82_rdo\":\"4\",\"child82_txt1\":\"u0e01u0e212555\",\"child82_txt2\":\"\",\"child9_select0\":\"05\",\"child9_select1\":\"03\",\"child9_select2\":\"08\",\"child9_select3\":\"04\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"u0e3f10\",\"child10_txt2\":\"u0e3f20\",\"child10_txt3\":\"u0e3f30\",\"child10_txt4\":\"u0e3f40\",\"child10_txt5\":\"u0e3f50\",\"child11_chkbox\":[\"1\",\"2\"]}', null, null, null);
INSERT INTO `gogov` VALUES ('34', 'หก', '2', '2', '[\"3929800114838\",\"3909900753191\"]', 'ฟหกด', '2018-07-10', '0000-00-00', null, null, null, 'ฟหกด', '0000-00-00', '0000-00-00', '2', 'ฟหกด', '', '4', 'ฟหกด', '', '03', '05', '05', '04', 'A', '฿123', '฿123', '฿123', '฿456', '฿123', null, null, '{\"child1_txt\":\"u0e2bu0e01\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"3929800114838\",\"3909900753191\"],\"child4_txt\":\"u0e1fu0e2bu0e01u0e14\",\"child5_txt1\":\"2018-7-10\",\"child5_txt2\":\"24 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child6_txt\":\"u0e1fu0e2bu0e01u0e14\",\"child7_txt1\":\"17 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child7_txt2\":\"25 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child81_rdo\":\"2\",\"child81_txt1\":\"u0e1fu0e2bu0e01u0e14\",\"child81_txt2\":\"\",\"child82_rdo\":\"4\",\"child82_txt1\":\"u0e1fu0e2bu0e01u0e14\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"05\",\"child9_select2\":\"05\",\"child9_select3\":\"04\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"u0e3f123\",\"child10_txt2\":\"u0e3f123\",\"child10_txt3\":\"u0e3f123\",\"child10_txt4\":\"u0e3f456\",\"child10_txt5\":\"u0e3f123\",\"child11_chkbox\":[\"1\",\"2\"]}', null, null, null);
INSERT INTO `gogov` VALUES ('35', 'หก', '2', '2', '[\"3929800114838\",\"3909900753191\"]', 'ฟหกด', '2018-07-10', '0000-00-00', null, null, null, 'ฟหกด', '0000-00-00', '0000-00-00', '2', 'ฟหกด', '', '4', 'ฟหกด', '', '03', '05', '05', '04', 'A', '฿123', '฿123', '฿123', '฿456', '฿123', null, null, '{\"child1_txt\":\"u0e2bu0e01\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"3929800114838\",\"3909900753191\"],\"child4_txt\":\"u0e1fu0e2bu0e01u0e14\",\"child5_txt1\":\"2018-7-10\",\"child5_txt2\":\"24 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child6_txt\":\"u0e1fu0e2bu0e01u0e14\",\"child7_txt1\":\"17 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child7_txt2\":\"25 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child81_rdo\":\"2\",\"child81_txt1\":\"u0e1fu0e2bu0e01u0e14\",\"child81_txt2\":\"\",\"child82_rdo\":\"4\",\"child82_txt1\":\"u0e1fu0e2bu0e01u0e14\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"05\",\"child9_select2\":\"05\",\"child9_select3\":\"04\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"u0e3f123\",\"child10_txt2\":\"u0e3f123\",\"child10_txt3\":\"u0e3f123\",\"child10_txt4\":\"u0e3f456\",\"child10_txt5\":\"u0e3f123\",\"child11_chkbox\":[\"1\",\"2\"]}', 'json_for_print', '2018-07-06 19:20:17', null);
INSERT INTO `gogov` VALUES ('36', 'หก', '2', '2', '[\"3929800114838\",\"3909900753191\"]', 'ฟหกด', '2018-07-10', '0000-00-00', null, null, null, 'ฟหกด', '0000-00-00', '0000-00-00', '2', 'ฟหกด', '', '4', 'ฟหกด', '', '03', '05', '05', '04', 'A', '฿123', '฿123', '฿123', '฿456', '฿123', null, null, '{\"child1_txt\":\"u0e2bu0e01\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"3929800114838\",\"3909900753191\"],\"child4_txt\":\"u0e1fu0e2bu0e01u0e14\",\"child5_txt1\":\"2018-7-10\",\"child5_txt2\":\"24 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child6_txt\":\"u0e1fu0e2bu0e01u0e14\",\"child7_txt1\":\"17 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child7_txt2\":\"25 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child81_rdo\":\"2\",\"child81_txt1\":\"u0e1fu0e2bu0e01u0e14\",\"child81_txt2\":\"\",\"child82_rdo\":\"4\",\"child82_txt1\":\"u0e1fu0e2bu0e01u0e14\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"05\",\"child9_select2\":\"05\",\"child9_select3\":\"04\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"u0e3f123\",\"child10_txt2\":\"u0e3f123\",\"child10_txt3\":\"u0e3f123\",\"child10_txt4\":\"u0e3f456\",\"child10_txt5\":\"u0e3f123\",\"child11_chkbox\":[\"1\",\"2\"]}', 'json_for_print', '2018-07-06 19:23:34', null);
INSERT INTO `gogov` VALUES ('37', 'ห', '2', '2', '[\"1849900108460\",\"3900300382606\"]', 'ฟหกด', '2018-07-18', '0000-00-00', null, null, null, 'ฟหกด', '0000-00-00', '0000-00-00', '2', 'หกด', '', '4', 'หกด', '', '03', '03', '05', '05', 'A', '฿123', '฿123', '฿123', '฿123', '฿123', null, null, '{\"child1_txt\":\"u0e2b\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"1849900108460\",\"3900300382606\"],\"child4_txt\":\"u0e1fu0e2bu0e01u0e14\",\"child5_txt1\":\"2018-7-18\",\"child5_txt2\":\"16 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child6_txt\":\"u0e1fu0e2bu0e01u0e14\",\"child7_txt1\":\"17 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child7_txt2\":\"24 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child81_rdo\":\"2\",\"child81_txt1\":\"u0e2bu0e01u0e14\",\"child81_txt2\":\"\",\"child82_rdo\":\"4\",\"child82_txt1\":\"u0e2bu0e01u0e14\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"03\",\"child9_select2\":\"05\",\"child9_select3\":\"05\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"u0e3f123\",\"child10_txt2\":\"u0e3f123\",\"child10_txt3\":\"u0e3f123\",\"child10_txt4\":\"u0e3f123\",\"child10_txt5\":\"u0e3f123\",\"child11_chkbox\":[\"1\",\"2\"]}', 'json_for_print', '2018-07-06 19:24:57', null);
INSERT INTO `gogov` VALUES ('38', 'ห', '2', '2', '[\"1849900108460\",\"3900300382606\"]', 'ฟหกด', '2018-07-18', '0000-00-00', null, null, null, 'ฟหกด', '0000-00-00', '0000-00-00', '2', 'หกด', '', '4', 'หกด', '', '03', '03', '05', '05', 'A', '฿123', '฿123', '฿123', '฿123', '฿123', null, null, '{\"child1_txt\":\"u0e2b\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"1849900108460\",\"3900300382606\"],\"child4_txt\":\"u0e1fu0e2bu0e01u0e14\",\"child5_txt1\":\"2018-7-18\",\"child5_txt2\":\"16 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child6_txt\":\"u0e1fu0e2bu0e01u0e14\",\"child7_txt1\":\"17 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child7_txt2\":\"24 u0e01u0e23u0e01u0e0eu0e32u0e04u0e21 2561\",\"child81_rdo\":\"2\",\"child81_txt1\":\"u0e2bu0e01u0e14\",\"child81_txt2\":\"\",\"child82_rdo\":\"4\",\"child82_txt1\":\"u0e2bu0e01u0e14\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"03\",\"child9_select2\":\"05\",\"child9_select3\":\"05\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"u0e3f123\",\"child10_txt2\":\"u0e3f123\",\"child10_txt3\":\"u0e3f123\",\"child10_txt4\":\"u0e3f123\",\"child10_txt5\":\"u0e3f123\",\"child11_chkbox\":[\"1\",\"2\"]}', 'json_for_print', '2018-07-06 19:27:20', null);
INSERT INTO `gogov` VALUES ('39', 'หกด', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"u0e2bu0e01u0e14\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:27:30', null);
INSERT INTO `gogov` VALUES ('40', 'dfg', '', '', 'null', 'sdfgsdfgsdfgsdfgsdfg', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, 'O:8:\"stdClass\":21:{s:10:\"child1_txt\";s:3:\"dfg\";s:10:\"child2_txt\";s:0:\"\";s:10:\"child4_txt\";s:20:\"sdfgsdfgsdfgsdfgsdfg\";s:11:\"child5_txt2\";s:0:\"\";s:10:\"child6_txt\";s:0:\"\";s:11:\"child7_txt1\";s:0:\"\";s:11:\"child7_txt2\";s:0:\"\";s:12:\"child81_txt1\";s:0:\"\";s:12:\"child81_txt2\";s:0:\"\";s:11:\"child82_rdo\";s:1:\"1\";s:12:\"child82_txt1\";s:0:\"\";s:12:\"child82_txt2\";s:0:\"\";s:14:\"child9_select0\";s:0:\"\";s:14:\"child9_select1\";s:0:\"\";s:14:\"child9_select2\";s:0:\"\";s:14:\"child9_select3\";s:0:\"\";s:12:\"child10_txt1\";s:0:\"\";s:12:\"child10_txt2\";s:0:\"\";s:12:\"child10_txt3\";s:0:\"\";s:12:\"child10_txt4\";s:0:\"\";s:12:\"child10_txt5\";s:0:\"\";}', 'json_for_print', '2018-07-06 19:32:07', null);
INSERT INTO `gogov` VALUES ('41', 'dfg', '', '', 'null', 'sdfgsdfgsdfgsdfgsdfg', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"dfg\",\"child2_txt\":\"\",\"child4_txt\":\"sdfgsdfgsdfgsdfgsdfg\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:34:00', null);
INSERT INTO `gogov` VALUES ('42', 'หฟฟ', '', '', 'null', 'sdfgsdfgsdfgsdfgsdfg', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"หฟฟหกด\",\"child2_txt\":\"\",\"child4_txt\":\"sdfgsdfgsdfgsdfgsdfg\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:34:39', null);
INSERT INTO `gogov` VALUES ('43', 'sdห', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, 'ฟหกดฟหกดฟหกดฟหกด', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"sdหกดฟหกด\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child5_txt2\":\"\",\"child6_txt\":\"ฟหกดฟหกดฟหกดฟหกด\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:36:38', null);
INSERT INTO `gogov` VALUES ('44', 'sdห', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, 'ฟหกดฟหกดฟหกดฟหกด', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"sdหกดฟหกด\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child5_txt2\":\"\",\"child6_txt\":\"ฟหกดฟหกดฟหกดฟหกด\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:38:08', null);
INSERT INTO `gogov` VALUES ('45', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, 'ฟหกด', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child5_txt2\":\"\",\"child6_txt\":\"ฟหกด\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:38:21', null);
INSERT INTO `gogov` VALUES ('46', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, 'หกดเหกดเ', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child5_txt2\":\"\",\"child6_txt\":\"หกดเหกดเ\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:39:32', null);
INSERT INTO `gogov` VALUES ('47', '', '', '', 'null', 'asdfasdfasdfหกดหกดหกด', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"asdfasdfasdfหกดหกดหกด\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:43:26', null);
INSERT INTO `gogov` VALUES ('48', '', '', '', 'null', 'ฟหกด', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"ฟหกด\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:45:57', null);
INSERT INTO `gogov` VALUES ('49', '', '', '', 'null', 'หกดฟหกด', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"หกดฟหกด\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:46:49', null);
INSERT INTO `gogov` VALUES ('50', '', '', '', 'null', 'หกดฟหกด', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"หกดฟหกด\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:47:02', null);
INSERT INTO `gogov` VALUES ('51', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:47:09', null);
INSERT INTO `gogov` VALUES ('52', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:47:30', null);
INSERT INTO `gogov` VALUES ('53', '', '', '', 'null', 'หกดเ', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"หกดเ\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:47:54', null);
INSERT INTO `gogov` VALUES ('54', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '2018-07-06 19:48:43', null);
INSERT INTO `gogov` VALUES ('55', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\"}', 'json_for_print', '0000-00-00 00:00:00', null);
INSERT INTO `gogov` VALUES ('56', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, 'json_for_print', '2018-07-06 19:50:30', null);
INSERT INTO `gogov` VALUES ('57', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, '2018-07-06 19:50:53', null);
INSERT INTO `gogov` VALUES ('58', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('59', '', '', '', 'null', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null);
INSERT INTO `gogov` VALUES ('60', 'asd', '1', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"asd\",\"child2_rdo\":\"1\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child5_txt2\":\"\",\"child6_txt\":\"\",\"child7_txt1\":\"\",\"child7_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_add\":\"3900300382606_เทียน  ปาโต\"}', 'json_for_print', '2018-07-11 19:52:28', '3900300382606');
INSERT INTO `gogov` VALUES ('61', 'sd', '1', '', '', 'sdf', '2018-07-10', '2018-07-12', null, null, null, 'sdf', '2018-07-09', '2018-07-14', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"sd\",\"child2_rdo\":\"1\",\"child2_txt\":\"\",\"child4_txt\":\"sdf\",\"child5_txt1\":\"2018-7-10\",\"child5_txt2\":\"2018-7-12\",\"child6_txt\":\"sdf\",\"child7_txt1\":\"2018-7-9\",\"child7_txt2\":\"2018-7-14\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_add\":\"3900300382606_เทียน  ปาโต\"}', 'json_for_print', '2018-07-11 19:57:00', '3900300382606');
INSERT INTO `gogov` VALUES ('62', 'sd', '1', '', '', 'sdf', '2018-07-09', '2018-07-11', null, null, null, 'asdf', '2018-07-02', '2018-07-08', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"sd\",\"child2_rdo\":\"1\",\"child2_txt\":\"\",\"child4_txt\":\"sdf\",\"child5_txt1\":\"2018-07-09\",\"child5_txt2\":\"2018-07-11\",\"child6_txt\":\"asdf\",\"child7_txt1\":\"2018-07-02\",\"child7_txt2\":\"2018-07-08\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_add\":\"3900300382606_เทียน  ปาโต\"}', 'json_for_print', '2018-07-11 20:03:13', '3900300382606');
INSERT INTO `gogov` VALUES ('63', '', '', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_add\":\"3900300382606_เทียน  ปาโต\"}', 'json_for_print', '2018-07-11 20:06:46', '3900300382606');
INSERT INTO `gogov` VALUES ('64', '', '', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '1,2,3,5', '456', '8,78', '456,', '', '4,59', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"5\"],\"child10_txt1\":\"456\",\"child10_txt2\":\"8,789\",\"child10_txt3\":\"456,456\",\"child10_txt4\":\"\",\"child10_txt5\":\"4,596\",\"person_addid13\":\"err\"}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"err\"}', '2018-07-16 09:39:13', 'err');
INSERT INTO `gogov` VALUES ('65', '', '', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', '1,2,3,5', '456', '8,789', '456,456', '', '4,596', null, null, '{\"child1_txt\":\"\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"5\"],\"child10_txt1\":\"456\",\"child10_txt2\":\"8,789\",\"child10_txt3\":\"456,456\",\"child10_txt4\":\"\",\"child10_txt5\":\"4,596\",\"person_addid13\":\"err\"}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"err\"}', '2018-07-16 09:40:35', 'err');
INSERT INTO `gogov` VALUES ('66', '', '2', '2', '1849900108460,3901101040129', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '4', '45', '', '', '', '', '', '1,2,3,4,5', '2,222', '12,745', '456,456', '456', '456,456', null, null, '{\"child1_txt\":\"\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"1849900108460\",\"3901101040129\"],\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"4\",\"child82_txt1\":\"45\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"2,222\",\"child10_txt2\":\"12,745\",\"child10_txt3\":\"456,456\",\"child10_txt4\":\"456\",\"child10_txt5\":\"456,456\",\"child11_chkbox\":[\"1\",\"2\"],\"person_addid13\":\"3909900753191\"}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-16 10:08:47', '3909900753191');
INSERT INTO `gogov` VALUES ('67', '', '2', '2', '1849900108460,3901101040129', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '4', '45', '', '03', '03', '03', '04', '1,2,3,4,5', '2,222', '12,745', '456,456', '456', '456,456', null, null, '{\"child1_txt\":\"\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"1849900108460\",\"3901101040129\"],\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"4\",\"child82_txt1\":\"45\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"03\",\"child9_select2\":\"03\",\"child9_select3\":\"04\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"2,222\",\"child10_txt2\":\"12,745\",\"child10_txt3\":\"456,456\",\"child10_txt4\":\"456\",\"child10_txt5\":\"456,456\",\"child11_chkbox\":[\"1\",\"2\"],\"person_addid13\":\"3909900753191\"}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-16 10:19:05', '3909900753191');
INSERT INTO `gogov` VALUES ('68', '4', '', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"4\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-16 10:36:29', '3909900753191');
INSERT INTO `gogov` VALUES ('69', '45', '2', '1', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"45\",\"child2_rdo\":\"2\",\"child2_txt\":\"1\",\"child3_select\":\"3901101040129\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-16 10:36:56', '3909900753191');
INSERT INTO `gogov` VALUES ('70', '45', '2', '1', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"45\",\"child2_rdo\":\"2\",\"child2_txt\":\"1\",\"child3_select\":\"3901101040129\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-16 10:36:58', '3909900753191');
INSERT INTO `gogov` VALUES ('71', '12', '2', '1', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"12\",\"child2_rdo\":\"2\",\"child2_txt\":\"1\",\"child3_select\":\"1849900108460\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-16 10:37:23', '3909900753191');
INSERT INTO `gogov` VALUES ('72', '5', '2', '1', '1929900184939', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"5\",\"child2_rdo\":\"2\",\"child2_txt\":\"1\",\"child3_select\":\"1929900184939\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-16 10:38:57', '3909900753191');
INSERT INTO `gogov` VALUES ('73', '5', '2', '2', '1929900184939,3901101040129', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"5\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"1929900184939\",\"3901101040129\"],\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-16 10:39:13', '3909900753191');
INSERT INTO `gogov` VALUES ('74', '45', '', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"45\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-16 12:00:56', '3909900753191');
INSERT INTO `gogov` VALUES ('75', '45', '', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"45\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-16 12:01:03', '3909900753191');
INSERT INTO `gogov` VALUES ('76', '2', '', '', '', '', '2018-07-11', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"2\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child5_txt1\":\"2018-07-11\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"11 กรกฎาคม 2561\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-17 14:31:44', '3909900753191');
INSERT INTO `gogov` VALUES ('77', '2', '', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"2\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-17 14:36:04', '3909900753191');
INSERT INTO `gogov` VALUES ('78', '2', '', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"2\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-17 14:38:09', '3909900753191');
INSERT INTO `gogov` VALUES ('79', '2', '', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"2\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-17 14:38:42', '3909900753191');
INSERT INTO `gogov` VALUES ('80', '2', '', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"2\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-17 14:40:01', '3909900753191');
INSERT INTO `gogov` VALUES ('81', '2', '', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"2\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-17 14:40:26', '3909900753191');
INSERT INTO `gogov` VALUES ('82', '2', '1', '', '', '', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"2\",\"child2_rdo\":\"1\",\"child2_txt\":\"\",\"child4_txt\":\"\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-17 14:42:03', '3909900753191');
INSERT INTO `gogov` VALUES ('83', '2', '1', '', '', '1', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"2\",\"child2_rdo\":\"1\",\"child2_txt\":\"\",\"child4_txt\":\"1\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-17 14:49:15', '3909900753191');
INSERT INTO `gogov` VALUES ('84', '2', '1', '', '', 'หกดเ', '0000-00-00', '0000-00-00', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"2\",\"child2_rdo\":\"1\",\"child2_txt\":\"\",\"child4_txt\":\"หกดเ\",\"child6_txt\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"\",\"child5_txt2_datethai\":\"\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-17 14:53:32', '3909900753191');
INSERT INTO `gogov` VALUES ('85', '112', '1', '', '', 'หหกด', '2018-07-09', '2018-07-17', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"112\",\"child2_rdo\":\"1\",\"child2_txt\":\"\",\"child4_txt\":\"หหกด\",\"child5_txt1\":\"2018-07-09\",\"child5_txt2\":\"2018-07-17\",\"child6_rdo\":\"2\",\"child6_txt1\":\"\",\"child6_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"9 กรกฎาคม 2561\",\"child5_txt2_datethai\":\"17 กรกฎาคม 2561\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-19 11:11:47', '3909900753191');
INSERT INTO `gogov` VALUES ('86', '112', '1', '', '', 'หหกด', '2018-07-09', '2018-07-17', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"112\",\"child2_rdo\":\"1\",\"child2_txt\":\"\",\"child4_txt\":\"หหกด\",\"child5_txt1\":\"2018-07-09\",\"child5_txt2\":\"2018-07-17\",\"child6_rdo\":\"1\",\"child6_txt1\":\"\",\"child6_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"9 กรกฎาคม 2561\",\"child5_txt2_datethai\":\"17 กรกฎาคม 2561\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-19 11:11:51', '3909900753191');
INSERT INTO `gogov` VALUES ('87', '123', '1', '', '', 'ปกดหก', '2018-07-11', '2018-07-10', null, null, null, '', '0000-00-00', '0000-00-00', '', '', '', '1', '', '', '', '', '', '', 'a', '', '', '', '', '', null, null, '{\"child1_txt\":\"123\",\"child2_rdo\":\"1\",\"child2_txt\":\"\",\"child4_txt\":\"ปกดหก\",\"child5_txt1\":\"2018-07-11\",\"child5_txt2\":\"2018-07-10\",\"child6_rdo\":\"1\",\"child6_txt1\":\"\",\"child6_txt2\":\"\",\"child81_txt1\":\"\",\"child81_txt2\":\"\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_txt1\":\"\",\"child10_txt2\":\"\",\"child10_txt3\":\"\",\"child10_txt4\":\"\",\"child10_txt5\":\"\",\"person_addid13\":\"3909900753191\",\"child10_chkbox\":[]}', '{\"child5_txt1_datethai\":\"11 กรกฎาคม 2561\",\"child5_txt2_datethai\":\"10 กรกฎาคม 2561\",\"child7_txt1_datethai\":\"\",\"child7_txt2_datethai\":\"\",\"person_addName\":\"3909900753191\"}', '2018-07-19 11:12:13', '3909900753191');
INSERT INTO `gogov` VALUES ('88', '123', '2', '2', '3100503310364,1929900184939', 'ไปราชการเรื่อง', '2018-07-18', '2018-07-19', '1', null, null, 'ไปราชการ ณ', '2018-07-17', '2018-07-25', '3', '', 'sdf', '1', '', '', '03', '02', '03', '04', '1,2,3,4,5', '12', '123', '1,234', '4,567', '12', null, null, '{\"child1_txt\":\"123\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"3100503310364\",\"1929900184939\"],\"child4_txt\":\"ไปราชการเรื่อง\",\"child5_txt1\":\"2018-07-18\",\"child5_txt2\":\"2018-07-19\",\"child6_rdo\":\"1\",\"child6_select\":\"5\",\"child6_txt1\":\"\",\"child6_txt2\":\"ไปราชการ ณ\",\"child7_txt1\":\"2018-07-17\",\"child7_txt2\":\"2018-07-25\",\"child81_txt1\":\"\",\"child81_rdo\":\"3\",\"child81_txt2\":\"sdf\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"02\",\"child9_select2\":\"03\",\"child9_select3\":\"04\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"12\",\"child10_txt2\":\"123\",\"child10_txt3\":\"1,234\",\"child10_txt4\":\"4,567\",\"child10_txt5\":\"12\",\"child11_chkbox\":[\"1\",\"2\"],\"person_addid13\":\"3909900753191\"}', '{\"child5_txt1_datethai\":\"18 กรกฎาคม 2561\",\"child5_txt2_datethai\":\"07/19/2018\",\"child7_txt1_datethai\":\"17 กรกฎาคม 2561\",\"child7_txt2_datethai\":\"25 กรกฎาคม 2561\",\"person_addName\":\"3909900753191\"}', '2018-07-19 20:20:40', '3909900753191');
INSERT INTO `gogov` VALUES ('89', '123', '2', '2', '3100503310364,1929900184939', 'ไปราชการเรื่อง', '2018-07-18', '2018-07-19', '1', '5', '', 'ไปราชการ ณ', '2018-07-17', '2018-07-25', '3', '', 'sdf', '1', '', '', '03', '02', '03', '04', '1,2,3,4,5', '12', '123', '1,234', '4,567', '12', null, null, '{\"child1_txt\":\"123\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"3100503310364\",\"1929900184939\"],\"child4_txt\":\"ไปราชการเรื่อง\",\"child5_txt1\":\"2018-07-18\",\"child5_txt2\":\"2018-07-19\",\"child6_rdo\":\"1\",\"child6_select\":\"5\",\"child6_txt1\":\"\",\"child6_txt2\":\"ไปราชการ ณ\",\"child7_txt1\":\"2018-07-17\",\"child7_txt2\":\"2018-07-25\",\"child81_txt1\":\"\",\"child81_rdo\":\"3\",\"child81_txt2\":\"sdf\",\"child82_rdo\":\"1\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"02\",\"child9_select2\":\"03\",\"child9_select3\":\"04\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"12\",\"child10_txt2\":\"123\",\"child10_txt3\":\"1,234\",\"child10_txt4\":\"4,567\",\"child10_txt5\":\"12\",\"child11_chkbox\":[\"1\",\"2\"],\"person_addid13\":\"3909900753191\"}', '{\"child5_txt1_datethai\":\"18 กรกฎาคม 2561\",\"child5_txt2_datethai\":\"07/19/2018\",\"child7_txt1_datethai\":\"17 กรกฎาคม 2561\",\"child7_txt2_datethai\":\"25 กรกฎาคม 2561\",\"person_addName\":\"3909900753191\"}', '2018-07-19 20:24:50', '3909900753191');
INSERT INTO `gogov` VALUES ('90', '147', '2', '2', '2800700001777,3901101040129', 'ไปราชการเรื่อง', '2018-07-19', '2018-07-20', '1', '3', '', 'ไปราชการ ณ', '2018-07-19', '2018-07-22', '3', '', 'ded', '4', 'กม4785', '', '03', '02', '04', '13', '1,2,3,4,5', '100', '1,245', '45,546', '45,678', '4,568,456', null, null, '{\"child1_txt\":\"147\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"2800700001777\",\"3901101040129\"],\"child4_txt\":\"ไปราชการเรื่อง\",\"child5_txt1\":\"2018-07-19\",\"child5_txt2\":\"2018-07-20\",\"child6_rdo\":\"1\",\"child6_select\":\"3\",\"child6_txt1\":\"\",\"child6_txt2\":\"ไปราชการ ณ\",\"child7_txt1\":\"2018-07-19\",\"child7_txt2\":\"2018-07-22\",\"child81_txt1\":\"\",\"child81_rdo\":\"3\",\"child81_txt2\":\"ded\",\"child82_rdo\":\"4\",\"child82_txt1\":\"กม4785\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"02\",\"child9_select2\":\"04\",\"child9_select3\":\"13\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"100\",\"child10_txt2\":\"1,245\",\"child10_txt3\":\"45,546\",\"child10_txt4\":\"45,678\",\"child10_txt5\":\"4,568,456\",\"child11_chkbox\":[\"1\",\"2\"],\"person_addid13\":\"3909900753191\"}', '{\"child5_txt1_datethai\":\"19 กรกฎาคม 2561\",\"child5_txt2_datethai\":\"20 กรกฎาคม 2561\",\"child7_txt1_datethai\":\"19 กรกฎาคม 2561\",\"child7_txt2_datethai\":\"22 กรกฎาคม 2561\",\"person_addName\":\"3909900753191\"}', '2018-07-20 09:55:19', '3909900753191');
INSERT INTO `gogov` VALUES ('91', '147', '2', '2', '2800700001777,3901101040129', 'ไปราชการเรื่อง', '2018-07-19', '2018-07-20', '2', '', 'สำนักปลัด', 'ไปราชการ ณ', '2018-07-19', '2018-07-22', '3', '', 'ded', '4', 'กม4785', '', '03', '02', '04', '13', '1,2,3,4,5', '100', '1,245', '45,546', '45,678', '4,568,456', null, null, '{\"child1_txt\":\"147\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"2800700001777\",\"3901101040129\"],\"child4_txt\":\"ไปราชการเรื่อง\",\"child5_txt1\":\"2018-07-19\",\"child5_txt2\":\"2018-07-20\",\"child6_select\":\"\",\"child6_rdo\":\"2\",\"child6_txt1\":\"สำนักปลัด\",\"child6_txt2\":\"ไปราชการ ณ\",\"child7_txt1\":\"2018-07-19\",\"child7_txt2\":\"2018-07-22\",\"child81_txt1\":\"\",\"child81_rdo\":\"3\",\"child81_txt2\":\"ded\",\"child82_rdo\":\"4\",\"child82_txt1\":\"กม4785\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"02\",\"child9_select2\":\"04\",\"child9_select3\":\"13\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"100\",\"child10_txt2\":\"1,245\",\"child10_txt3\":\"45,546\",\"child10_txt4\":\"45,678\",\"child10_txt5\":\"4,568,456\",\"child11_chkbox\":[\"1\",\"2\"],\"person_addid13\":\"3909900753191\"}', '{\"child5_txt1_datethai\":\"19 กรกฎาคม 2561\",\"child5_txt2_datethai\":\"20 กรกฎาคม 2561\",\"child7_txt1_datethai\":\"19 กรกฎาคม 2561\",\"child7_txt2_datethai\":\"22 กรกฎาคม 2561\",\"person_addName\":\"3909900753191\"}', '2018-07-20 09:56:15', '3909900753191');
INSERT INTO `gogov` VALUES ('92', '147', '2', '2', '2800700001777,3901101040129', 'ไปราชการเรื่อง', '2018-07-19', '2018-07-20', '1', '', '', '', '2018-07-19', '2018-07-22', '3', '', 'ded', '4', 'กม4785', '', '03', '02', '04', '13', '1,2,3,4,5', '100', '1,245', '45,546', '45,678', '4,568,456', null, null, '{\"child1_txt\":\"147\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"2800700001777\",\"3901101040129\"],\"child4_txt\":\"ไปราชการเรื่อง\",\"child5_txt1\":\"2018-07-19\",\"child5_txt2\":\"2018-07-20\",\"child6_rdo\":\"1\",\"child6_select\":\"\",\"child6_txt1\":\"\",\"child6_txt2\":\"\",\"child7_txt1\":\"2018-07-19\",\"child7_txt2\":\"2018-07-22\",\"child81_txt1\":\"\",\"child81_rdo\":\"3\",\"child81_txt2\":\"ded\",\"child82_rdo\":\"4\",\"child82_txt1\":\"กม4785\",\"child82_txt2\":\"\",\"child9_select0\":\"03\",\"child9_select1\":\"02\",\"child9_select2\":\"04\",\"child9_select3\":\"13\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"100\",\"child10_txt2\":\"1,245\",\"child10_txt3\":\"45,546\",\"child10_txt4\":\"45,678\",\"child10_txt5\":\"4,568,456\",\"child11_chkbox\":[\"1\",\"2\"],\"person_addid13\":\"3909900753191\"}', '{\"child5_txt1_datethai\":\"19 กรกฎาคม 2561\",\"child5_txt2_datethai\":\"20 กรกฎาคม 2561\",\"child7_txt1_datethai\":\"19 กรกฎาคม 2561\",\"child7_txt2_datethai\":\"22 กรกฎาคม 2561\",\"person_addName\":\"3909900753191\"}', '2018-07-20 10:05:49', '3909900753191');
INSERT INTO `gogov` VALUES ('93', '456', '2', '2', '3900300437460,3929800114838', 'zxcv', '2018-07-11', '2018-07-10', '1', '5', '', 'cvdfdcfg', '2018-07-17', '2018-07-20', '2', 'dfg', '', '2', '', '', '', '', '', '', '1,2,3,4,5', '45', '456', '456', '456', '456', null, null, '{\"child1_txt\":\"456\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"3900300437460\",\"3929800114838\"],\"child4_txt\":\"zxcv\",\"child5_txt1\":\"2018-07-11\",\"child5_txt2\":\"2018-07-10\",\"child6_rdo\":\"1\",\"child6_select\":\"5\",\"child6_txt1\":\"\",\"child6_txt2\":\"cvdfdcfg\",\"child7_txt1\":\"2018-07-17\",\"child7_txt2\":\"2018-07-20\",\"child81_rdo\":\"2\",\"child81_txt1\":\"dfg\",\"child81_txt2\":\"\",\"child82_rdo\":\"2\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"45\",\"child10_txt2\":\"456\",\"child10_txt3\":\"456\",\"child10_txt4\":\"456\",\"child10_txt5\":\"456\",\"child11_chkbox\":[\"1\",\"2\"],\"person_addid13\":\"3909900753191\"}', '{\"child5_txt1_datethai\":\"11 กรกฎาคม 2561\",\"child5_txt2_datethai\":\"10 กรกฎาคม 2561\",\"child7_txt1_datethai\":\"17 กรกฎาคม 2561\",\"child7_txt2_datethai\":\"20 กรกฎาคม 2561\",\"person_addName\":\"3909900753191\"}', '2018-07-20 10:06:40', '3909900753191');
INSERT INTO `gogov` VALUES ('94', '456', '2', '2', '3900300437460,3929800114838', 'zxcv', '2018-07-11', '2018-07-10', '1', '5', '', 'cvdfdcfg', '2018-07-17', '2018-07-20', '2', 'dfg', '', '2', '', '', '', '', '', '', '1,2,3,4,5', '45', '456', '456', '456', '456', null, null, '{\"child1_txt\":\"456\",\"child2_rdo\":\"2\",\"child2_txt\":\"2\",\"child3_select\":[\"3900300437460\",\"3929800114838\"],\"child4_txt\":\"zxcv\",\"child5_txt1\":\"2018-07-11\",\"child5_txt2\":\"2018-07-10\",\"child6_rdo\":\"1\",\"child6_select\":\"5\",\"child6_txt1\":\"\",\"child6_txt2\":\"cvdfdcfg\",\"child7_txt1\":\"2018-07-17\",\"child7_txt2\":\"2018-07-20\",\"child81_rdo\":\"2\",\"child81_txt1\":\"dfg\",\"child81_txt2\":\"\",\"child82_rdo\":\"2\",\"child82_txt1\":\"\",\"child82_txt2\":\"\",\"child9_select0\":\"\",\"child9_select1\":\"\",\"child9_select2\":\"\",\"child9_select3\":\"\",\"child10_chkbox\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"child10_txt1\":\"45\",\"child10_txt2\":\"456\",\"child10_txt3\":\"456\",\"child10_txt4\":\"456\",\"child10_txt5\":\"456\",\"child11_chkbox\":[\"1\",\"2\"],\"person_addid13\":\"3909900753191\"}', '{\"child5_txt1_datethai\":\"11 กรกฎาคม 2561\",\"child5_txt2_datethai\":\"10 กรกฎาคม 2561\",\"child7_txt1_datethai\":\"17 กรกฎาคม 2561\",\"child7_txt2_datethai\":\"20 กรกฎาคม 2561\",\"person_addName\":\"3909900753191\"}', '2018-07-20 10:10:08', '3909900753191');

-- ----------------------------
-- Table structure for govgov_type
-- ----------------------------
DROP TABLE IF EXISTS `govgov_type`;
CREATE TABLE `govgov_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gogov_type_name` varchar(80) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of govgov_type
-- ----------------------------
INSERT INTO `govgov_type` VALUES ('1', 'ประชุม(ที่มีระเบียบวาระการประชุม)', 'Y');
INSERT INTO `govgov_type` VALUES ('2', 'ประชุมเชิงปฏิบัติการ', 'N');
INSERT INTO `govgov_type` VALUES ('3', 'อบรม', 'N');
INSERT INTO `govgov_type` VALUES ('4', 'สัมมนา', 'N');
INSERT INTO `govgov_type` VALUES ('5', 'ศึกษาดูงาน', 'N');
INSERT INTO `govgov_type` VALUES ('6', 'ฝึกอบรม(มีโครงการ/หลักสูตร ฝึกอบรม)', 'Y');

-- ----------------------------
-- Table structure for groupwork
-- ----------------------------
DROP TABLE IF EXISTS `groupwork`;
CREATE TABLE `groupwork` (
  `id` int(1) NOT NULL AUTO_INCREMENT,
  `groupwork_code` varchar(3) NOT NULL,
  `groupwork_name` varchar(100) DEFAULT NULL,
  `head_groupwork` varchar(13) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of groupwork
-- ----------------------------
INSERT INTO `groupwork` VALUES ('1', 'gwA', 'กลุ่มภารกิจอำนวยการ', '3929800114838', 'Y');
INSERT INTO `groupwork` VALUES ('2', 'gwB', 'กลุ่มภารกิจบริการจิตเวชและสุขภาพจิต', '3949900026621', 'Y');
INSERT INTO `groupwork` VALUES ('3', 'gwC', 'กลุ่มภารกิจพัฒนาสู่ความเป็นเลิศ', '3769900072110', 'Y');
INSERT INTO `groupwork` VALUES ('4', 'gwD', 'กลุ่มภารกิจการพยาบาล', '3120100399804', 'Y');
INSERT INTO `groupwork` VALUES ('5', 'gwE', 'กลุ่มภารกิจสนับสนุนและพัฒนาเครือข่ายบริการ', '3800100013594', 'Y');
INSERT INTO `groupwork` VALUES ('6', 'gwF', 'สำนักงานเลขาผู้อำนวยการ', null, 'Y');

-- ----------------------------
-- Table structure for group_occupation
-- ----------------------------
DROP TABLE IF EXISTS `group_occupation`;
CREATE TABLE `group_occupation` (
  `id` int(1) NOT NULL AUTO_INCREMENT,
  `group_occupation_code` varchar(2) DEFAULT NULL,
  `group_occupation_name` varchar(150) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of group_occupation
-- ----------------------------
INSERT INTO `group_occupation` VALUES ('1', 'G1', 'กลุ่มอาชีพบริหาร,อำนวยการ,ธุรการ,งานสถิติ,งานนิติการ,งานการทูตและต่างประเทศ', 'Y');
INSERT INTO `group_occupation` VALUES ('2', 'G2', 'กลุ่มอาชีพการคลัง การเศรษฐกิจ การพาณิชย์และอุตสาหกรรม', 'Y');
INSERT INTO `group_occupation` VALUES ('3', 'G3', 'กลุ่มอาชีพคมนาคม ขนส่ง และติดต่อสื่อสาร', 'Y');
INSERT INTO `group_occupation` VALUES ('4', 'G4', 'กลุ่มอาชีพเกษตรกรรม', 'Y');
INSERT INTO `group_occupation` VALUES ('5', 'G5', 'กลุ่มอาชีพวิทยาศาสตร์', 'Y');
INSERT INTO `group_occupation` VALUES ('6', 'G6', 'กลุ่มอาชีพแพทย์ พยาบาลและสารธารสุข', 'Y');
INSERT INTO `group_occupation` VALUES ('7', 'G7', 'กลุ่มอาชีพวิศวกรรม สถาบัตยกรรม และช่างเทคนิคต่างๆ', 'Y');
INSERT INTO `group_occupation` VALUES ('8', 'G8', 'กลุ่มอาชีพการศึกษา ศิลปะ สังคม และการพัมนาชุมชน', 'Y');

-- ----------------------------
-- Table structure for hr_development_type
-- ----------------------------
DROP TABLE IF EXISTS `hr_development_type`;
CREATE TABLE `hr_development_type` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `hr_develop_typename` varchar(80) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hr_develop_typename` (`hr_develop_typename`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hr_development_type
-- ----------------------------
INSERT INTO `hr_development_type` VALUES ('1', 'แผนพัฒนารายบุคคล(Individual Development Plan : IDP)', 'Y');
INSERT INTO `hr_development_type` VALUES ('2', 'Training Roadmap', 'Y');

-- ----------------------------
-- Table structure for onlineuser
-- ----------------------------
DROP TABLE IF EXISTS `onlineuser`;
CREATE TABLE `onlineuser` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `sessid` text,
  `id13_online` varchar(13) DEFAULT NULL,
  `person_online` varchar(80) DEFAULT NULL,
  `login_type` varchar(10) DEFAULT NULL,
  `chkin_datetime` datetime DEFAULT NULL,
  `chkout_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of onlineuser
-- ----------------------------
INSERT INTO `onlineuser` VALUES ('1', 'ncolo75ndv569ikaili2rj0qs7', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-19 21:23:40', '2017-12-19 23:04:05');
INSERT INTO `onlineuser` VALUES ('2', 'co3vsj5vvg1t595f31bt3p8686', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-19 22:58:14', '2017-12-19 22:58:35');
INSERT INTO `onlineuser` VALUES ('3', 'rbijn7eh5jnomikn5l8d0ihk04', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-19 22:58:58', '2017-12-19 22:59:17');
INSERT INTO `onlineuser` VALUES ('4', '2ssg38v6fljpjihci98sdse4h4', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-20 13:20:57', '2017-12-20 13:54:02');
INSERT INTO `onlineuser` VALUES ('5', 'ppb9stiurh6s20kgdakgag4562', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-20 14:08:43', '2017-12-20 14:51:03');
INSERT INTO `onlineuser` VALUES ('6', 'uol7tkve82q6fg7m5j95mv97h6', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-20 18:16:25', '2017-12-20 19:56:07');
INSERT INTO `onlineuser` VALUES ('7', '9t7k4j0cvq8b5elp295jmhicl0', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-20 20:06:31', '2017-12-20 20:36:37');
INSERT INTO `onlineuser` VALUES ('8', '3ujhkmhi4fkmv81e9lndb7hqk7', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-21 06:26:39', '2017-12-21 06:27:11');
INSERT INTO `onlineuser` VALUES ('9', 'sptvsrhpjpnj625jl2dbch9cl0', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-21 08:56:00', '2017-12-21 09:45:21');
INSERT INTO `onlineuser` VALUES ('10', 'uuhj3a1oji7ug3kpcbe79a73r6', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-22 09:27:34', '2017-12-22 10:06:24');
INSERT INTO `onlineuser` VALUES ('11', 'bajduqonqg46u648g9m54begc6', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-22 10:11:22', '2017-12-22 11:54:48');
INSERT INTO `onlineuser` VALUES ('12', '6lglpan8dmpkqie8ms4292doo5', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-22 14:25:24', '2017-12-22 15:13:22');
INSERT INTO `onlineuser` VALUES ('13', 'hojq07jq87pm7c38k1kfavcq10', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-22 19:53:38', '2017-12-22 20:48:58');
INSERT INTO `onlineuser` VALUES ('14', 'h7jftrj611a5de3thnhecid070', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-23 16:54:50', '2017-12-23 17:16:51');
INSERT INTO `onlineuser` VALUES ('15', 'n0f8763tju2tg3vup4rhpvd7r0', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-24 10:04:09', '2017-12-24 10:36:31');
INSERT INTO `onlineuser` VALUES ('16', '5ikefs76eh8r55bq5vo5cpp015', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-24 18:48:20', '2017-12-24 19:42:29');
INSERT INTO `onlineuser` VALUES ('17', 'f3nfulc39ojj6aoodlp7i37mv2', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-26 08:45:20', '2017-12-26 09:06:21');
INSERT INTO `onlineuser` VALUES ('18', 'rpi6s11uatl139baujsi8mqst0', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-26 14:17:19', '2017-12-26 15:09:01');
INSERT INTO `onlineuser` VALUES ('19', 's70j35fs948vm0le1fkssif6l5', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-26 15:11:12', '2017-12-26 15:32:32');
INSERT INTO `onlineuser` VALUES ('20', 'ii6irbbiql5i9ie8u36l2c13b3', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-27 09:11:33', '2017-12-27 09:55:53');
INSERT INTO `onlineuser` VALUES ('21', 'j68fo1tucu5eft526thlt9cii0', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-27 10:38:52', '2017-12-27 11:13:18');
INSERT INTO `onlineuser` VALUES ('22', 'bobpb16qk38disnjf6n8p8pon5', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-27 19:06:23', '2017-12-27 20:53:07');
INSERT INTO `onlineuser` VALUES ('23', '5q55jsuqug6ndifa3qish2lt74', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-28 13:27:01', '2017-12-28 15:17:26');
INSERT INTO `onlineuser` VALUES ('24', 'ig9fi1oqnl0brgb1k8i5mvplg7', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-28 15:19:56', '2017-12-28 15:54:17');
INSERT INTO `onlineuser` VALUES ('25', '5irv340b5u6g3kh8guet4e9v42', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2017-12-29 15:15:50', '2017-12-29 15:39:51');
INSERT INTO `onlineuser` VALUES ('26', 'vui5hrfjaeoa3jh70n07jnn142', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-05 09:00:48', '2018-01-05 09:36:52');
INSERT INTO `onlineuser` VALUES ('27', 'sfp6b2lon3ve8bml32vmlkpgj7', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-05 12:49:59', '2018-01-05 13:21:20');
INSERT INTO `onlineuser` VALUES ('28', '2591u908nlk6ubjdn1grmar312', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-05 21:01:28', '2018-01-05 21:36:21');
INSERT INTO `onlineuser` VALUES ('29', '53kr9eit69rhj0s25bv1mjvt44', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-05 21:38:31', null);
INSERT INTO `onlineuser` VALUES ('30', 'm84t05nf3vth820nhuf8tfiku7', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-15 10:03:10', '2018-01-15 11:04:14');
INSERT INTO `onlineuser` VALUES ('31', 'o3aghdckujcboetn33ae7s7ms6', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-24 13:57:17', '2018-01-24 14:45:35');
INSERT INTO `onlineuser` VALUES ('32', '9f6kjc7sejhmpfdp3cngh1te70', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-25 11:12:47', '2018-01-25 12:22:14');
INSERT INTO `onlineuser` VALUES ('33', 'o0lsv6dqkep0tf2mref7pimp84', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-25 14:09:07', '2018-01-25 15:17:39');
INSERT INTO `onlineuser` VALUES ('34', 'mnbhagqh1bt8a8hdvho2o2heo1', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-25 15:29:29', '2018-01-25 16:00:16');
INSERT INTO `onlineuser` VALUES ('35', 's5ng4fbviorgja3s2sc1o00di5', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-25 18:45:40', '2018-01-25 20:47:53');
INSERT INTO `onlineuser` VALUES ('36', 'o3qio03qvp75v5dv655dri3if0', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-26 10:24:29', '2018-01-26 11:24:58');
INSERT INTO `onlineuser` VALUES ('37', '948c8n2nm5rr86mch4vc3icch5', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-26 11:44:52', '2018-01-26 12:24:58');
INSERT INTO `onlineuser` VALUES ('38', 'so3ql71qveggds3fc5j37tquk4', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-01-26 13:28:11', '2018-01-26 14:47:58');
INSERT INTO `onlineuser` VALUES ('39', 'qsr6mflrb9a7oe1n05eti66kk5', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-02-01 11:09:59', '2018-02-01 12:08:59');
INSERT INTO `onlineuser` VALUES ('40', 'uinj6d02ea2c0i7c1utv004867', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-02-01 15:12:00', '2018-02-01 16:04:49');
INSERT INTO `onlineuser` VALUES ('41', 't16jvlv0a8890g1oao6rujjrq5', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-02-02 09:25:36', '2018-02-02 09:48:36');
INSERT INTO `onlineuser` VALUES ('42', 'd2kgbpj26tgjinrimnsq4ggp31', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-02-02 09:57:10', '2018-02-02 10:18:12');
INSERT INTO `onlineuser` VALUES ('43', 'b1pknmc3idlfi5n2pdkjnp7oa2', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-02-02 15:14:13', '2018-02-02 15:59:29');
INSERT INTO `onlineuser` VALUES ('44', 'omtqtdf93o669fgibj80kujkk7', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-02-06 10:59:15', '2018-02-06 11:57:46');
INSERT INTO `onlineuser` VALUES ('45', 'lbqabfurlmj4f1cefk2gusc962', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-03-14 14:21:49', '2018-03-14 14:52:24');
INSERT INTO `onlineuser` VALUES ('46', 'a6pr102su59fnv014bp3096hg4', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-03-14 15:17:02', '2018-03-14 16:03:45');
INSERT INTO `onlineuser` VALUES ('47', 'n8r95rbgd8jc045fnl759fn910', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-04-17 11:18:00', '2018-04-17 12:32:32');
INSERT INTO `onlineuser` VALUES ('48', 'rheoh5fn2h8hf3b9on9d3lspf3', '3909900753191', 'ชญานนท์ สุวรรณชัย', 'typeadmin', '2018-04-17 13:24:17', '2018-04-17 13:24:21');
INSERT INTO `onlineuser` VALUES ('49', 'j080mu5p5lk04rqv3qrn3nq0a2', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-04-17 13:24:33', '2018-04-17 13:58:53');
INSERT INTO `onlineuser` VALUES ('50', '0a52k4h1hbn105nhst9qjnt9h3', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-04-23 08:46:10', '2018-04-23 09:07:30');
INSERT INTO `onlineuser` VALUES ('51', '37lhelltk37gmi9hjhd6j7sd35', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-04-23 13:44:41', '2018-04-23 14:34:31');
INSERT INTO `onlineuser` VALUES ('52', 'nedo262dl8311fhvv24jkhir60', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-04-24 09:04:03', '2018-04-24 09:43:33');
INSERT INTO `onlineuser` VALUES ('53', '0nvc3t1o8te4hjbfiroktqhbq4', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-17 15:50:58', '2018-05-17 16:13:11');
INSERT INTO `onlineuser` VALUES ('54', '1u7imrerevrf16b25f3obsp3s2', '3909900753191', 'ชญานนท์ สุวรรณชัย', 'typeadmin', '2018-05-24 13:56:16', '2018-05-24 13:56:33');
INSERT INTO `onlineuser` VALUES ('55', '5avhnbqt7vuagvchn686fg9ce1', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-24 13:56:43', '2018-05-24 14:08:07');
INSERT INTO `onlineuser` VALUES ('56', '4pf11rhrn1su5au8hafofu2lr2', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-24 14:08:47', '2018-05-24 15:53:19');
INSERT INTO `onlineuser` VALUES ('57', '063q1ev4al38uqhm1te1np9im3', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-25 08:39:21', '2018-05-25 11:25:55');
INSERT INTO `onlineuser` VALUES ('58', '0pt37rk9kd0d1cm6h279sm43p2', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-25 13:43:57', '2018-05-25 15:40:51');
INSERT INTO `onlineuser` VALUES ('59', 'vk136iaocd23j1t0ootcd7jnp7', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-28 08:46:50', '2018-05-28 12:25:35');
INSERT INTO `onlineuser` VALUES ('60', 'ntgllqlce6dikhg8lc56p3pdh6', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-28 13:50:41', '2018-05-28 15:24:09');
INSERT INTO `onlineuser` VALUES ('61', 'l1va8sv0ijvgs5t0n6193la403', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-30 09:57:56', '2018-05-30 12:30:41');
INSERT INTO `onlineuser` VALUES ('62', 'pjkkkqc2hgs8396qebojlt6o46', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-30 14:47:50', '2018-05-30 16:08:00');
INSERT INTO `onlineuser` VALUES ('63', '0rlqom7ncm0anr1anuq44lhsj0', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-31 10:12:07', '2018-05-31 11:16:39');
INSERT INTO `onlineuser` VALUES ('64', '7987eqe8dldaggdmmjjk0bu3j2', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-31 11:23:03', '2018-05-31 11:55:29');
INSERT INTO `onlineuser` VALUES ('65', '26uds3pktpog48smug87lvdho7', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-31 13:57:56', null);
INSERT INTO `onlineuser` VALUES ('66', 'bn2fbm7p1l272g0bsfj9kf2656', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-05-31 15:01:34', '2018-05-31 15:23:19');
INSERT INTO `onlineuser` VALUES ('67', '1pchd28tes5d9d532824nurol3', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-06-04 08:39:26', '2018-06-04 09:07:55');
INSERT INTO `onlineuser` VALUES ('68', 'h101aurl8qm9e5h2g821lt1pe6', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-06-04 09:46:28', '2018-06-04 11:35:30');
INSERT INTO `onlineuser` VALUES ('69', '0k13pd7n325i1hgt0pb4has201', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-06-04 11:59:04', '2018-06-04 12:39:49');
INSERT INTO `onlineuser` VALUES ('70', 'pphqv8k0qegss7u9hoi5836mk4', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-06-05 08:55:11', '2018-06-05 09:52:21');
INSERT INTO `onlineuser` VALUES ('71', '3ie9efcak6j6fktm86ljfo4gq3', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-06-05 09:59:01', '2018-06-05 12:32:53');
INSERT INTO `onlineuser` VALUES ('72', '8uokm5jagu4pkq1cn8drf46236', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-06-05 13:08:54', null);
INSERT INTO `onlineuser` VALUES ('73', 'luh6n5ipevsasu1drfn5dhnih2', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-06-05 13:47:51', '2018-06-05 15:04:30');
INSERT INTO `onlineuser` VALUES ('74', '5aopf1unllveklstn3sgdlkum0', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-06-05 15:32:22', '2018-06-05 15:57:39');
INSERT INTO `onlineuser` VALUES ('75', 'te8o1bv76a4st18m8hc0tjvs27', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-06-06 08:05:30', '2018-06-06 08:14:27');
INSERT INTO `onlineuser` VALUES ('76', 'vb47pt4nsj1r6kk806ho3erf60', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-07-02 09:44:14', '2018-07-02 10:50:58');
INSERT INTO `onlineuser` VALUES ('77', 'mvn00706amk5mqt6jiasco2kh5', '3900300382606', 'เทียน  ปาโต', 'typeuser', '2018-07-03 13:08:02', '2018-07-03 13:08:41');
INSERT INTO `onlineuser` VALUES ('78', '3ff0u4ju2s03ftvor7g08gvac1', '3900300382606', 'เทียน  ปาโต', 'typeuser', '2018-07-03 13:11:08', '2018-07-03 14:37:38');
INSERT INTO `onlineuser` VALUES ('79', 'e0ekpb72nij1l4lv62ds2t3174', '3900300382606', 'เทียน  ปาโต', 'typeuser', '2018-07-03 14:51:55', '2018-07-03 15:41:38');
INSERT INTO `onlineuser` VALUES ('80', 'e15aqspnbepl172bfsbrbslef3', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2020-05-17 07:39:49', null);
INSERT INTO `onlineuser` VALUES ('81', 'paf336bn271g5muo7mic6tfgk5', '3900300382606', 'เทียน  ปาโต', 'typeuser', '2018-07-05 19:21:44', null);
INSERT INTO `onlineuser` VALUES ('82', 'a6n197tl27rugr7or8tt2t9l11', '3900300382606', 'เทียน  ปาโต', 'typeuser', '2018-07-06 18:59:26', null);
INSERT INTO `onlineuser` VALUES ('83', '3gbpb2fhpeg03q855k4a0l4up4', '3900300382606', 'เทียน  ปาโต', 'typeuser', '2018-07-11 19:08:57', null);
INSERT INTO `onlineuser` VALUES ('84', '1n1m01is81f47f5pq5mn6v27o7', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-07-16 10:07:39', '2018-07-16 12:21:42');
INSERT INTO `onlineuser` VALUES ('85', '75b7and1aejqb8c5qhtr6fban7', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-07-16 15:15:13', '2018-07-16 15:35:33');
INSERT INTO `onlineuser` VALUES ('86', '98u3nf2vjkghctn1k7rbrb31m7', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-07-17 14:08:06', '2018-07-17 15:53:28');
INSERT INTO `onlineuser` VALUES ('87', '4n8tk1s5ohqnknbpj9u8ne24d2', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-07-18 14:15:38', '2018-07-18 14:37:43');
INSERT INTO `onlineuser` VALUES ('88', 'p7jrglhth11a96rtfhfjjn1vu5', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-07-19 10:58:51', '2018-07-19 11:36:55');
INSERT INTO `onlineuser` VALUES ('89', '6kdks3m75pe7u5tcvfo7tqffp6', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-07-19 13:59:33', '2018-07-19 14:08:58');
INSERT INTO `onlineuser` VALUES ('90', 'nspuigd3oudqghd6vuotaedul0', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-07-19 14:09:12', '2018-07-19 16:59:00');
INSERT INTO `onlineuser` VALUES ('91', 'anpcq3k8moqc90d3uov6smthn3', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-07-19 18:25:08', null);
INSERT INTO `onlineuser` VALUES ('92', 'tcla6vgchs9kj075jgrm4j51a6', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-07-20 09:46:47', '2018-07-20 11:13:16');
INSERT INTO `onlineuser` VALUES ('93', 'ced5g30nnv6cv9f6bpv9gno0k1', '3909900753191', 'ชญานนท์  สุวรรณชัย', 'typeuser', '2018-07-20 13:59:42', '2018-07-20 14:55:03');

-- ----------------------------
-- Table structure for permission_hr
-- ----------------------------
DROP TABLE IF EXISTS `permission_hr`;
CREATE TABLE `permission_hr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission_code` varchar(25) DEFAULT NULL,
  `permission_name` varchar(150) DEFAULT NULL,
  `admin` varchar(1) DEFAULT NULL,
  `staff` varchar(1) DEFAULT NULL,
  `user` varchar(1) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of permission_hr
-- ----------------------------
INSERT INTO `permission_hr` VALUES ('1', '#addPMS', 'บันทึกผลการปฏิบัติราชการ', '1', '1', '0', 'Y');
INSERT INTO `permission_hr` VALUES ('2', '#goGovApprove', 'ขออนุมัติไปราชการ', '1', '1', '1', 'Y');

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `cid` varchar(24) DEFAULT NULL,
  `pass` varchar(80) DEFAULT NULL,
  `login_type` varchar(10) DEFAULT NULL,
  `po_num` varchar(15) DEFAULT NULL,
  `pname` varchar(8) DEFAULT NULL,
  `fname` varchar(100) DEFAULT NULL,
  `lname` varchar(100) DEFAULT NULL,
  `position_code` varchar(8) DEFAULT NULL,
  `position_fullname` varchar(250) DEFAULT NULL,
  `class_position_shortname` varchar(2) DEFAULT NULL,
  `dep_code` varchar(12) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=385 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES ('1', '3100503310364', null, 'typeuser', '209', 'นาย', 'อธิบ ', 'ตันอารีย์', 'G6_8', 'นายแพทย์', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('2', '1929900184939', null, 'typeuser', '994', 'นาย', 'วิวรรธน์ ', 'อังกิตติสวัสดิ์', 'G6_8', 'นายแพทย์', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('3', '1849900108460', null, 'typeuser', '1282', 'นาย', 'ศิลา ', 'แซ่ลิ้ม', 'G6_8', 'นายแพทย์', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('4', '3900300382606', '2T42', 'typeuser', '1840', 'นาย', 'เทียน ', 'ปาโต', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('5', '3901101040129', '0129', 'typeuser', '2529', 'นางสาว', 'พจนา ', 'ช่วยกูล', 'G6_18', 'นักเวชศาสตร์การสื่อความหมาย', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('6', '3900300437460', 'JAKE', 'typeuser', '2840', 'นาย', 'ทนงศ์ ', 'ด้วงปาน', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('7', '3929800114838', 'C25N', 'typeuser', '2851', 'นางสาว', 'จันทร์จิรา ', 'ธวัชสุวรรณ', 'G1_24', 'นักจัดการงานทั่วไป', 'K3', null, 'Y');
INSERT INTO `person` VALUES ('8', '1901100012486', '2486', 'typeuser', '2852', 'นางสาว', 'ณัฏฐพัชร์ ', 'เพ็ชร์ศรี', 'G1_24', 'นักจัดการงานทั่วไป', 'K1', 'dep1_gwA', 'Y');
INSERT INTO `person` VALUES ('9', '3909900753191', '3191!@#', 'typeuser', '2853', 'นาย', 'ชญานนท์ ', 'สุวรรณชัย', 'G1_25', 'นักทรัพยากรบุคคล', 'K1', 'dep2_gwA', 'Y');
INSERT INTO `person` VALUES ('10', '3900100582644', '6NK5', 'typeuser', '2854', 'นาง', 'รัตนาพร ', 'สุวรรณวงค์', 'G1_24', 'นักจัดการงานทั่วไป', 'K2', 'dep2_gwA', 'Y');
INSERT INTO `person` VALUES ('11', '3959900169936', '4RGK', 'typeuser', '2855', 'นาง', 'จงจิต ', 'ผิวพรรณ', 'G1_39', 'เจ้าพนักงานธุรการ', 'O2', 'dep1_gwA', 'Y');
INSERT INTO `person` VALUES ('12', '2800700001777', '1777', 'typeuser', '2856', 'นางสาว', 'กิตติมา ', 'ชัยศิริ', 'G1_39', 'เจ้าพนักงานธุรการ', 'O1', null, 'Y');
INSERT INTO `person` VALUES ('13', '3901101112103', 'VAWY', 'typeuser', '2857', 'นาง', 'วิไล ', 'แคล้วอ้อม', 'G1_39', 'เจ้าพนักงานธุรการ', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('14', '3800200292975', 'TDHP', 'typeuser', '2858', 'นางสาว', 'นัยนา ', 'ทองสุวรรณ์', 'G3_44', 'เจ้าพนักงานเผยแพร่ประชาสัมพันธ์', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('15', '3909900687091', '7091', 'typeuser', '2859', 'นาย', 'โกสม ', 'ศรีพจนารถ', 'G7_56', 'นายช่างเทคนิค', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('16', '3120600927095', '1211', 'typeuser', '2860', 'นาย', 'ธนพล ', 'ยีนิส', 'G7_56', 'นายช่างเทคนิค', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('17', '3770600499446', '9446', 'typeuser', '2863', 'นางสาว', 'สายฝน ', 'นิลดำ', 'G2_32', 'นักวิชาการเงินและบัญชี', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('18', '3909800103585', 'Z4WU', 'typeuser', '2864', 'นาง', 'วรรณี ', 'มุสิกโร', 'G2_43', 'เจ้าพนักงานการเงินและบัญชี', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('19', '3900200436747', '4GDC', 'typeuser', '2865', 'นางสาว', 'จินดาวรรณ ', 'โภชนุกูล', 'G2_43', 'เจ้าพนักงานการเงินและบัญชี', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('20', '3900200401218', '7EQ7', 'typeuser', '2866', 'นางสาว', 'กัญจนา ', 'จันทร์ฉาย', 'G2_43', 'เจ้าพนักงานการเงินและบัญชี', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('21', '3909900323943', 'HKLY', 'typeuser', '2867', 'นาง', 'ฐิตาพร ', 'พูลแก้ว', 'G1_40', 'เจ้าพนักงานพัสดุ', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('22', '3909800361452', 'NYU9', 'typeuser', '2868', 'นาง', 'มณฑา ', 'ขาวเขียว', 'G1_40', 'เจ้าพนักงานพัสดุ', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('23', '1100200645789', '11062534', 'typeuser', '2869', 'นางสาว', 'กฤตยา ', 'บางเหลือ', 'G1_41', 'เจ้าพนักงานเวชสถิติ', 'O1', null, 'Y');
INSERT INTO `person` VALUES ('24', '3900900121188', 'A24F', 'typeuser', '2870', 'นาง', 'ชุติมา ', 'อนุกูล', 'G1_41', 'เจ้าพนักงานเวชสถิติ', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('25', '3900700670978', '1234', 'typeuser', '2871', 'นางสาว', 'กัลยา ', 'จันทร์ขาว', 'G6_48', 'โภชนากร', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('26', '3930100671469', '2520', 'typeuser', '2872', 'นาง', 'สุภาพร ', 'อินทร์สุวรรณโณ', 'G6_48', 'โภชนากร', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('27', '1840100266291', null, 'typeuser', '2874', 'นาย', 'ณัฐวุฒิ ', 'ปรีชาปัญญากุล', 'G6_8', 'นายแพทย์', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('28', '3909900359549', '9310', 'typeuser', '2875', 'นาง', 'ประไพพรรณ ', 'นิลวงศ์', 'G6_4', 'นักจิตวิทยาคลินิก', 'K3', null, 'Y');
INSERT INTO `person` VALUES ('29', '1909700046621', 'AH15', 'typeuser', '2876', 'นางสาว', 'รักษิณา ', 'พรมทองบุญ', 'G6_4', 'นักจิตวิทยาคลินิก', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('30', '3900500171692', 'UMZK', 'typeuser', '2877', 'นาง', 'กัณณวันฑ์ ', 'สกูลหรัง', 'G6_4', 'นักจิตวิทยาคลินิก', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('31', '3930100284236', '4236', 'typeuser', '2878', 'นาง', 'สุจิรา ', 'เนาวรัตน์', 'G8_38', 'นักสังคมสงเคราะห์', 'K3', null, 'Y');
INSERT INTO `person` VALUES ('32', '3540500044724', 'PCZS', 'typeuser', '2880', 'นาย', 'วีระศักดิ์ ', 'บุญไทย', 'G3_45', 'เจ้าพนักงานโสตทัศนศึกษา', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('33', '3259800009216', 'T67V', 'typeuser', '2881', 'นาง', 'รัศมี ', 'บุญไทย', 'G8_36', 'บรรณารักษ์', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('34', '3769900072110', '1234', 'typeuser', '2883', 'นาย', 'นพพร ', 'ตันติรังสี', 'G6_8', 'นายแพทย์', 'K3', null, 'Y');
INSERT INTO `person` VALUES ('35', '3949900026621', 'N33Z', 'typeuser', '2886', 'นาง', 'คัคนางค์ ', 'วาณิชย์เจริญ', 'G6_8', 'นายแพทย์', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('36', '1929900046366', 'z_uok30', 'typeuser', '2891', 'นางสาว', 'พิมพ์ชนก ', 'แซ่โล่', 'G6_5', 'ทันตแพทย์', 'K3', null, 'Y');
INSERT INTO `person` VALUES ('37', '5909900025221', 'boonchuay', 'typeuser', '2892', 'นางสาว', 'สมฤทัย ', 'บุญช่วย', 'G6_10', 'เภสัชกร', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('38', '3900400025473', '5473', 'typeuser', '2894', 'นาย', 'วิชัย ', 'ลิขสิทธิ์ดำรงกุล', 'G6_10', 'เภสัชกร', 'K3', null, 'Y');
INSERT INTO `person` VALUES ('39', '3909900561135', '9VHF', 'typeuser', '2895', 'นางสาว', 'วันดี ', 'นันท์วิฑิตพงศ์', 'G6_10', 'เภสัชกร', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('40', '3909900458105', '9999', 'typeuser', '2896', 'นาง', 'ศิริรินทร์ ', 'ทันตสุวรรณ', 'G6_10', 'เภสัชกร', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('41', '1900200008293', 'GENT', 'typeuser', '2897', 'นาย', 'พลากร ', 'สุวรรณละเอียด', 'G6_47', 'เจ้าพนักงานเภสัชกรรม', 'O1', null, 'Y');
INSERT INTO `person` VALUES ('42', '3900100421039', '9999', 'typeuser', '2898', 'นาง', 'ประภา ', 'ปาลรัตน์', 'G6_47', 'เจ้าพนักงานเภสัชกรรม', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('43', '1820500071269', '1269', 'typeuser', '2900', 'นาย', 'วินัย ', 'ละไม', 'G6_47', 'เจ้าพนักงานเภสัชกรรม', 'O1', null, 'Y');
INSERT INTO `person` VALUES ('44', '3909900776646', '9999', 'typeuser', '2901', 'นาง', 'จงคิด ', 'อ่อนเจริญ', 'G6_47', 'เจ้าพนักงานเภสัชกรรม', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('45', '3901200024555', 'SNON', 'typeuser', '2902', 'นาย', 'อนล ', 'สุจริตธุระการ', 'G6_10', 'เภสัชกร', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('46', '3900800031446', 'PT93', 'typeuser', '2903', 'นาย', 'อภิชน ', 'บุญตามชู', 'G6_12', 'นักรังสีการแพทย์', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('47', '3900900512144', '9999', 'typeuser', '2904', 'นาย', 'วิโรจน์ ', 'ไชยกูล', 'G6_49', 'เจ้าพนักงานรังสีการแพทย์', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('48', '3810400066707', 'GKRS', 'typeuser', '2905', 'นาง', 'อัจจนา ', 'กิ้มเฉี้ยง', 'G6_6', 'นักเทคนิคการแพทย์', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('49', '3810100183627', '9999', 'typeuser', '2906', 'นางสาว', 'จรรยา ', 'มาร์อีน', 'G6_50', 'เจ้าพนักงานวิทยาศาสตร์การแพทย์', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('50', '3840700289621', '41GS', 'typeuser', '2907', 'นาง', 'พัชริดา ', 'ราชสุข', 'G6_50', 'เจ้าพนักงานวิทยาศาสตร์การแพทย์', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('51', '1909900156072', 'AXDV', 'typeuser', '2908', 'นาย', 'เทิดพงศ์ ', 'เดชา', 'G6_1', 'นักกายภาพบำบัด', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('52', '3909800243573', '5FT4', 'typeuser', '2910', 'นางสาว', 'นิยม ', 'ชูทะวงศ์', 'G6_53', 'เจ้าพนักงานอาชีวบำบัด', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('53', '3930500275722', 'A2911', 'typeuser', '2911', 'นาง', 'สายพิณ ', 'ทองสม', 'G6_53', 'เจ้าพนักงานอาชีวบำบัด', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('54', '3900200458627', 'MJKW', 'typeuser', '2913', 'นางสาว', 'กันตวรรณ ', 'มากวิจิต', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('55', '5101600032443', '5U8E', 'typeuser', '2914', 'นาง', 'นิภา ', 'โขมพัฒน์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('56', '1909800578862', 'ST06', 'typeuser', '2915', 'นางสาว', 'สุทธิดา ', 'แก้วประดิษฐ์', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('57', '3900100794676', 'JK78', 'typeuser', '2916', 'นาย', 'ชัยวัฒน์ ', 'พุทธัสโร', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('58', '5900700019556', '9556', 'typeuser', '2917', 'นางสาว', 'รุจณิชา ', 'พรหมเทพ', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('59', '3909900282830', 'musikapong', 'typeuser', '2918', 'นาย', 'สราวุธ ', 'มูสิกพงษ์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('60', '3910400157744', 'K5YJ', 'typeuser', '2919', 'นาย', 'ฉัตรชัย ', 'เพ็งเขียว', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('61', '3909800874743', 'GV6B', 'typeuser', '2920', 'นาง', 'ช้องมาศ ', 'ประชาตรี', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('62', '3909900472817', '3WBT', 'typeuser', '2921', 'นางสาว', 'ปภาดา ', 'มนตรี', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('63', '5900199011411', '3T35', 'typeuser', '2922', 'นางสาว', 'ภัททิรา ', 'บัวจันทร์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('64', '3900100202621', 'FTU4', 'typeuser', '2923', 'นางสาว', 'จริยา ', 'เส็นเจริญ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('65', '3900100522838', 'KB2660', 'typeuser', '2924', 'นาย', 'โกวิท ', 'สุวรรณโณ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('66', '3900300666752', 'C9WU', 'typeuser', '2925', 'นาย', 'นรา ', 'หนูทองสุข', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('67', '3801400260164', '3699', 'typeuser', '2926', 'นาง', 'อุษณี ', 'ชูเชื้อ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('68', '3909900260224', 'KK55', 'typeuser', '2927', 'นาย', 'เริงฤทธิ์ ', 'ประชาตรี', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('69', '3930400139517', '9517', 'typeuser', '2928', 'นาง', 'พีระทรัพย์ ', 'เพ็ชรรัตน์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('70', '1949800075950', '5950', 'typeuser', '2930', 'นาย', 'มูหะมัดไพซอล ', 'เจะแต', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('71', '3900700081701', 'F6RE', 'typeuser', '2931', 'นางสาว', 'สุภาพ ', 'แสงดี', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('72', '1450500030442', '0442', 'typeuser', '2932', 'นาย', 'ก้อง ', 'กำสมุทร', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('73', '5900700018169', 'HZY5', 'typeuser', '2933', 'นาย', 'บรรณวิชญ์ ', 'เพชรสุวรรณ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('74', '1949800079793', '0899789585', 'typeuser', '2934', 'นางสาว', 'สุอาดา ', 'แวสานิ', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('75', '3120100399804', 'FTW5', 'typeuser', '2936', 'นาง', 'สยาภรณ์ ', 'เดชดี', 'G6_7', 'พยาบาลวิชาชีพ', 'K3', null, 'Y');
INSERT INTO `person` VALUES ('76', '1969800060723', '0723', 'typeuser', '2941', 'นางสาว', 'วนิดา ', 'อาแว', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('77', '1860200049489', '9489', 'typeuser', '2942', 'นางสาว', 'โสภา ', 'ทัศมาลี', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('78', '3909900754219', 'ZAWK', 'typeuser', '2943', 'นางสาว', 'ถนอมรัตน์ ', 'หุตะจูฑะ', 'G6_7', 'พยาบาลวิชาชีพ', 'K3', null, 'Y');
INSERT INTO `person` VALUES ('79', '1509900060923', '4PPQ', 'typeuser', '2944', 'นาย', 'อนุชา ', 'พุทธิมา', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('80', '1660700018444', '8444', 'typeuser', '2945', 'นาง', 'จงกลณี ', 'เจะอาลี', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('81', '3969900197891', 'JK99', 'typeuser', '2946', 'นาง', 'วรรณี ', 'เอียดประพาล', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('82', '3300300040671', 'ONLY', 'typeuser', '2947', 'นาง', 'ชุมพร ', 'บุญเซ่ง', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('83', '3900100362741', 'PT93', 'typeuser', '2948', 'นาง', 'พรทิพย์ ', 'กระจ่างพัฒน์วงษ์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('84', '3960300180663', 'TYP5', 'typeuser', '2949', 'นาง', 'นิบัดดรียะ ', 'จิงา', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('85', '1909900090683', 'ASDF', 'typeuser', '2952', 'นางสาว', 'ชฎีนาฏ ', 'ใหม่วัด', 'G6_10', 'เภสัชกร', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('86', '3909900096335', 'GARC', 'typeuser', '2953', 'นาง', 'สุจิตรา ', 'ครองมณีรัตน์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('87', '3969900194191', 'HTF7', 'typeuser', '2954', 'นาง', 'พัทธนันท์ ', 'อินสะโร', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('88', '3900100468884', 'LL88', 'typeuser', '2955', 'นางสาว', 'วรรณา ', 'กิ้มเผ่า', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('89', '3900900618244', '2513', 'typeuser', '2957', 'นางสาว', 'กานดา ', 'สุขหอม', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('90', '3800101519629', '5873', 'typeuser', '2958', 'นางสาว', 'จินตนา ', 'อมรชาติ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('91', '3900100039223', 'C9VZ', 'typeuser', '2959', 'นาง', 'เสาวณี ', 'จุทอง', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('92', '1909900166744', '8MPR', 'typeuser', '2960', 'นางสาว', 'ปัทมาวรรณ ', 'ขันหาญศึก', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('93', '3900100489172', '63HL', 'typeuser', '2961', 'นางสาว', 'อารมณ์ ', 'ปริศวงศ์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('94', '5801490001984', '6253088', 'typeuser', '2962', 'นาง', 'เสาวคนธ์ ', 'สุดตรง', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('95', '3101201313183', '2433', 'typeuser', '2963', 'นาง', 'พัชรินทร์ ', 'ปลอดภัย', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('96', '3909900653927', '45NL', 'typeuser', '2964', 'นางสาว', 'พรชนก ', 'สุวรรณพรรค', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('97', '3909900280861', 'MPG5', 'typeuser', '2965', 'นาง', 'วรรณโณ ', 'ตัณตรีบูรณ์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('98', '1809900432259', '1470', 'typeuser', '2967', 'นางสาว', 'ฝนทิพย์ ', 'กลั้งเนียม', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('99', '5900400017761', 'SD89', 'typeuser', '2968', 'นาง', 'จรูญรัตน์ ', 'สัตยมาศ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('100', '3969900196771', 'NK57', 'typeuser', '2969', 'นาง', 'เสาวรี ', 'รุกขสุคนธ์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('101', '1909800157964', '2529', 'typeuser', '2970', 'นางสาว', 'รดาฝัน ', 'สุวรรณกาญจน์', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('102', '3909800679851', 'XSG9', 'typeuser', '2971', 'นางสาว', 'ยุวดี ', 'ทองหนูนุ้ย', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('103', '3909900563405', 'QE37', 'typeuser', '2972', 'นางสาว', 'ปรินดา ', 'สุวรรณบุบผา', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('104', '3909900613691', 'HJ54', 'typeuser', '2973', 'นาง', 'จิราพันธ์ ', 'หลักฉั่ว', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('105', '3930700060924', 'UJ44', 'typeuser', '2974', 'นางสาว', 'สุเมตรา ', 'ทองมีเหลือ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('106', '3900100059046', 'RVW6', 'typeuser', '2975', 'นางสาว', 'ชัดเจน ', 'จันทรพัฒน์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('107', '3740100329941', '555K', 'typeuser', '2976', 'นางสาว', 'กนกวรรณ ', 'บุญเสริม', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('108', '4809900008745', 'K8TG', 'typeuser', '2977', 'นาง', 'ภัชรินทร์ ', 'เฉลิมบุญ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('109', '3930100870445', 'JTS4', 'typeuser', '2978', 'นาง', 'พัชรี ', 'ทับทวี', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('110', '3800700598674', 'VSZH', 'typeuser', '2979', 'นาง', 'ศศิธร ', 'เก็มเส็น', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('111', '3770100344559', 'HCM9', 'typeuser', '2980', 'นาง', 'วรางคณา ', 'มุสิกะไชย', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('112', '3930100138272', 'WVGD', 'typeuser', '2981', 'นาง', 'ประคอง ', 'ปานเกลี้ยง', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('113', '3900200215244', 'RTT5', 'typeuser', '2982', 'นาง', 'กัญญา ', 'วิจิตต์พันธ์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('114', '3909900169626', 'RAGT', 'typeuser', '2984', 'นาย', 'วานิช ', 'จีนฉาย', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('115', '3900100392217', '4YTR', 'typeuser', '2985', 'นาง', 'กาญจน์ดี ', 'แสงสงวน', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('116', '3450600846181', 'DRT4', 'typeuser', '2986', 'นาง', 'จรรยา ', 'พุทธวาศรี', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('117', '3820800118020', '7U2T', 'typeuser', '2987', 'นาง', 'ญานี ', 'อภัยภักดี', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('118', '3909900482952', '53VS', 'typeuser', '2988', 'นาย', 'ประดิษฐ์ ', 'แสงสุวรรณ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('119', '3909900072711', '2509', 'typeuser', '2989', 'นาง', 'กฤษณา ', 'เธียนชัยวัฒนา', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('120', '3950100615194', '6319', 'typeuser', '2990', 'นาย', 'รอซิดี ', 'ศรีรัตน์', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('121', '3909900586693', '2991', 'typeuser', '2991', 'นางสาว', 'กาญจนา ', 'วรเวช', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('122', '3909900305937', 'L5PP', 'typeuser', '2993', 'นาง', 'สุมาลี ', 'ผลพิบูลย์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('123', '3909800634327', 'CD35', 'typeuser', '2994', 'นาง', 'วิภา ', 'สุวรรณรัตน์', 'G6_7', 'พยาบาลวิชาชีพ', 'K3', null, 'Y');
INSERT INTO `person` VALUES ('124', '3930100528224', '7015', 'typeuser', '2995', 'นาย', 'มานพ ', 'ชูเชื้อ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('125', '3930200227447', '7447', 'typeuser', '2996', 'นาง', 'กันต์หทัย(โสภา) ', 'ชำริห์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('126', '3900700711950', 'AVF3', 'typeuser', '2997', 'นาง', 'อนงค์ ', 'สอนกชกร', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('127', '3909900472027', 'LV8B', 'typeuser', '2998', 'นาย', 'จิระวัฒน์ ', 'สำเภา', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('128', '3920700215359', 'ST5P', 'typeuser', '2999', 'นาง', 'มัลลิกา ', 'ชัยเพ็ชร', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('129', '3909900465268', '54BH', 'typeuser', '3000', 'นาง', 'จรรย์จิรา ', 'เพ็งเขียว', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('130', '3900300367623', 'A3001', 'typeuser', '3001', 'นาง', 'กนกชนก ', 'การะเกษร', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('131', '3909900265528', 'JARA', 'typeuser', '3002', 'นาง', 'จรัสศรี ', 'แสงสุริยงค์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('132', '3909900384411', 'moon6', 'typeuser', '3003', 'นาง', 'มลิวัลย์ ', 'โชโต', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('133', '3900300009948', '9948', 'typeuser', '3004', 'นาง', 'ธัญวรัตม์ ', 'หอมช่วย', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('134', '3900700803668', 'XPEZ', 'typeuser', '3005', 'นาง', 'อรุณลักษณ์ ', 'อุทกะพันธ์', 'G6_54', 'พยาบาลเทคนิค', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('135', '3900100157340', '2507', 'typeuser', '3006', 'นาง', 'ประกอบ ', 'ขุนทอง', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('136', '3909900657990', '78TY', 'typeuser', '3007', 'นาง', 'จุฑาทิพย์ ', 'พลสวัสดิ์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('137', '3601000450367', 'C8XJ', 'typeuser', '3008', 'นาง', 'อัญชัญ ', 'หนูทองสุข', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('138', '3900700693676', 'JZ90', 'typeuser', '3012', 'นาง', 'ยุพิน ', 'บำรุงวงศ์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('139', '3909900472019', 'SW96', 'typeuser', '3015', 'นาย', 'จิรวัฒน์ ', 'หลักฉั่ว', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('140', '3930400101773', 'EVUY', 'typeuser', '3016', 'นาง', 'ขวัญจิต ', 'มากศรี', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('141', '3900200186953', 'RY56', 'typeuser', '3017', 'นาง', 'อารี ', 'เงารังษี', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('142', '3900900341803', '8KTP', 'typeuser', '3018', 'นาง', 'อัมไพ ', 'แสงสุวรรณ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('143', '3900300601367', '3MV2', 'typeuser', '3019', 'นาง', 'ระวีวรรณ ', 'ธรรมรัตน์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('144', '3969900197522', '87KH', 'typeuser', '3020', 'นาง', 'พวงพร ', 'เสนีย์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('145', '1959900288076', '8076', 'typeuser', '3022', 'นาย', 'ธนพล ', 'แสนสุข', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('146', '3900400076116', 'C8JY', 'typeuser', '3023', 'นางสาว', 'อ้อยทิพย์ ', 'เพ็งทอง', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('147', '3930700005249', '5249', 'typeuser', '3024', 'นางสาว', 'อรรถยา ', 'จันทร์ห่อ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('148', '3900300541186', 'PK25', 'typeuser', '3025', 'นางสาว', 'ประไพ ', 'มณี', 'G6_54', 'พยาบาลเทคนิค', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('149', '1840100184198', 'Z4RB', 'typeuser', '3026', 'นางสาว', 'สุกัญญา ', 'เอื้อนกระโทก', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('150', '3909900082717', '1403', 'typeuser', '3027', 'นาง', 'ศศิลักษณ์ ', 'แก้วชื่น', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('151', '3900700498814', '9SDI', 'typeuser', '3028', 'นาง', 'จิรวดี ', 'จันทสุวรรณ', 'G6_54', 'พยาบาลเทคนิค', 'O2', null, 'Y');
INSERT INTO `person` VALUES ('152', '1509900212146', '2146', 'typeuser', '3030', 'นางสาว', 'บุญสิตา ', 'พลกล้า', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('153', '1860800035853', '5853', 'typeuser', '3031', 'นางสาว', 'หทัยทิพย์ ', 'เพชรคง', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('154', '1909900024028', '4028', 'typeuser', '3035', 'นางสาว', 'สุคนธวรรณ ', 'สุวรรณเรืองศรี', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('155', '1820200046323', '5266', 'typeuser', '3037', 'นางสาว', 'กรรณิกา ', 'ไถนาเพรียว', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('156', '3801600353557', '3557', 'typeuser', '3039', 'นาง', 'อารี ', 'ไชยโย', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('157', '3900100487307', 'VQMS', 'typeuser', '3044', 'นาง', 'นฤมล ', 'ปาโต', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('158', '3341800141621', '1621', 'typeuser', '3045', 'นางสาว', 'จารุวรรณ ', 'เกื้อทาน', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('159', '3930100454271', 'XDRY', 'typeuser', '3046', 'นาง', 'โสพิศ ', 'ราชผล', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('160', '3801000253187', '3187', 'typeuser', '3048', 'นางสาว', 'สุพาภรณ์ ', 'พนาลี', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('161', '3909800521905', 'UZNN', 'typeuser', '3049', 'นางสาว', 'มีนา ', 'นุ้ยแนบ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('162', '3909900022480', 'HGD5', 'typeuser', '3050', 'นางสาว', 'นันทพร ', 'ศรีนิ่ม', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('163', '3909900391477', 'KEMI', 'typeuser', '3052', 'นาง', 'เขมิกา ', 'สิริเสถียร', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('164', '3801600562946', 'YY99', 'typeuser', '3053', 'นาง', 'วิไลพร ', 'บุตรหงษ์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('165', '3801600419094', 'T5EQ', 'typeuser', '3054', 'นาง', 'สุดา ', 'ยุทธโท', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('166', '3900200154202', '4EH7', 'typeuser', '3055', 'นาง', 'มาลี ', 'เกตแก้ว', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('167', '3909900419738', '4PF4', 'typeuser', '3056', 'นาย', 'ศักดิ์สิทธิ์ ', 'สนิทวงศ์ ณ อยุธยา', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('168', '3900300325939', '1578', 'typeuser', '3057', 'นางสาว', 'เขมวันต์ ', 'ไมตรีจรรย์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('169', '3969900197964', '0909', 'typeuser', '3058', 'นาง', 'เมตตา ', 'เลิศเกียรติรัชตะ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('170', '3909900580393', '0393', 'typeuser', '3059', 'นาง', 'วชิราภรณ์ ', 'วงศ์วิวัฒน์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('171', '3909900613712', '47G2', 'typeuser', '3060', 'นาย', 'เกียรติวิชญ์ ', 'จารุพันธ์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('172', '1930300082398', '2398', 'typeuser', '3061', 'นางสาว', 'จุฑาพร ', 'ดำเกลี้ยง', 'G6_7', 'พยาบาลวิชาชีพ', 'K1', null, 'Y');
INSERT INTO `person` VALUES ('173', '3801300700812', 'Q82G', 'typeuser', '3062', 'นางสาว', 'นิโลบล ', 'กลั่นสุวรรณ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('174', '3830100055653', '2525', 'typeuser', '3576', 'นางสาว', 'สุกันยา ', 'ศิรินินทศักดิ์', 'G6_8', 'นายแพทย์', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('175', '3909801062611', '43250190', 'typeuser', '3577', 'นาย', 'ชูเกียรติ ', 'ยงพิทยาพงศ์', 'G6_8', 'นายแพทย์', 'K3', null, 'Y');
INSERT INTO `person` VALUES ('176', '1909800036571', '9915', 'typeuser', '3578', 'นางสาว', 'พัชรนันท์ ', 'ไพโรจน์ศิริกุล', 'G6_5', 'ทันตแพทย์', 'K3', null, 'Y');
INSERT INTO `person` VALUES ('177', '3930100500800', '0800', 'typeuser', '3579', 'นางสาว', 'อรอุสา ', 'ศิริเทพ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('178', '5930500032966', '2966', 'typeuser', '3580', 'นาง', 'สุภาภรณ์ ', 'ฉีดเกตุ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('179', '3900200405752', 'MHCK', 'typeuser', '3581', 'นาง', 'กัญญา ', 'แท่นทิพย์', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('180', '3900200145815', '8FT8', 'typeuser', '3583', 'นางสาว', 'ระเบียบ ', 'สงวนเขียว', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('181', '3909900458555', '2533', 'typeuser', '3607', 'นาง', 'นิลนรา ', 'ชโนวรรณะ', 'G6_5', 'ทันตแพทย์', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('182', '3900100551102', '9P52', 'typeuser', '3609', 'นางสาว', 'จุฑา ', 'ปาตังคะโร(มณีโชติ)', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('183', '3900200247138', 'NJ25', 'typeuser', '3611', 'นาย', 'จรัญ ', 'แก้วศรี', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('184', '3100504224674', 'WPRY', 'typeuser', '3612', 'นาง', 'บุปผา ', 'เพ็ชร์ชระ', 'G6_7', 'พยาบาลวิชาชีพ', 'K2', null, 'Y');
INSERT INTO `person` VALUES ('185', '3570700235523', '9999', 'typeuser', '55สจ00469', 'นาย', 'สุพันธ์', 'ท่าอินสม', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('186', '3900700301425', '9999', 'typeuser', '55สจ00478', 'นาง', 'ปลิว', 'พิจิตรบรรจง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('187', '3579900017056', '9999', 'typeuser', '55สจ00490', 'นาง', 'วลัยลักษณ์', 'จันทร์ไฝ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('188', '3900200227471', '2511', 'typeuser', '55สจ00493', 'นาง', 'สุภาพร', 'ทองคำ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('189', '3801600710546', null, 'typeuser', '55สจ00494', 'นางสาว', 'อารี', 'แก้วพัว', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('190', '3900101150861', '50861', 'typeuser', '55สจ00495', 'นาง', 'จำเนียร', 'ปรางจันทร์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('191', '3860400457455', '9999', 'typeuser', '55สจ00496', 'นางสาว', 'ลัดดาวรรณ', 'มะลิทอง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('192', '3900100006368', '9999', 'typeuser', '55สจ00505', 'นาง', 'ยุพิน', 'แท่นสุวรรณ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('193', '3909900100642', '9999', 'typeuser', '55สจ00506', 'นาง', 'ขัตติยะวัน', 'แก้วประดิษฐ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('194', '3500600367576', '4725', 'typeuser', '55สจ00507', 'นาง', 'จารุณี', 'แก้วประดิษฐ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('195', '3809900378471', '2513', 'typeuser', '55สจ00509', 'นาง', 'ธนาภา', 'เอกชน', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('196', '3900300539718', '9999', 'typeuser', '55สจ00510', 'นาง', 'ร่อกีย๊ะ', 'สมหวัง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('197', '3900200175218', '9999', 'typeuser', '55สจ00511', 'นาง', 'วิไล', 'แสงลอย', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('198', '3909900145280', '2504', 'typeuser', '55สจ00512', 'นาง', 'สมศรี', 'เวชสิทธิ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('199', '3930600312204', '9999', 'typeuser', '55สจ00513', 'นาง', 'สมไสว', 'โสปเหย๊าะ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('200', '3900100053129', '2922', 'typeuser', '55สจ00515', 'นาง', 'สิริภา', 'ประยูรวงศ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('201', '3460500306622', '9999', 'typeuser', '55สจ00516', 'นาง', 'อรพิน', 'จันทร์ไฝ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('202', '3900100643139', '3139', 'typeuser', '55สจ00517', 'นางสาว', 'ปุณยนุช', 'ประกอบเส็ง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('203', '1900100012914', 'ARENA', 'typeuser', '55สจ00473', 'นางสาว', 'อาริดา', 'พงศ์เพ็ชร์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('204', '1801300044374', '2528', 'typeuser', '55สจ00520', 'นางสาว', 'เรวดี', 'แก้วสุก', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('205', '3909900138526', '2516', 'typeuser', '55สจ00463', 'นาย', 'ชัชวาลย์', 'รักยิ่ง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('206', '3909900145301', 'DNDH', 'typeuser', '55สจ00465', 'นาย', 'ดนุเดช', 'ฮึกหาญ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('207', '3900200154181', '9999', 'typeuser', '55สจ00470', 'นาย', 'อนงค์', 'พุ่มคง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('208', '3909900545415', '9999', 'typeuser', '55สจ00479', 'นาง', 'กรีพร', 'บุญทัน', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('209', '3900500140401', '9999', 'typeuser', '55สจ00482', 'นาง', 'ดุษณี', 'โทนะพันธ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('210', '3909900211673', '9999', 'typeuser', '55สจ00483', 'นาง', 'ธันย์ชนก', 'เพ็ญจำรัส', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('211', '3900200109398', '9999', 'typeuser', '55สจ00486', 'นาง', 'พยอม', 'กำเนิดอินทร์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('212', '3801600603901', '9999', 'typeuser', '55สจ00488', 'นางสาว', 'พวงเพ็ญ', 'เรืองขนาบ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('213', '3900200263397', '9999', 'typeuser', '55สจ00491', 'นาง', 'วาสนา', 'เล่ายิ้ว', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('214', '3900200250236', '9999', 'typeuser', '55สจ00492', 'นาง', 'สุดจิต', 'แซ่เฮง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('215', '3909900079066', '9066', 'typeuser', '55สจ00498', 'นาย', 'ชัยรัตน์', 'รัตนสังข์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('216', '3420900975661', null, 'typeuser', '55สจ00499', 'นาย', 'ดลกฤดิ', 'บัวระภา', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('217', '5969999005368', '5368', 'typeuser', '55สจ00500', 'นาย', 'อรรถพล', 'แก้วคีรี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('218', '3900100273285', 'VG3E', 'typeuser', '55สจ00501', 'นาย', 'นพชัย', 'มูสิกพันธ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('219', '1909900250150', '0150', 'typeuser', '55สจ00504', 'นาย', 'เฉลิมพร', 'สุวรรณรัตน์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('220', '1909900011465', '8210', 'typeuser', '55สจ00525', 'นาย', 'อดิศักดิ์', 'ปิ่นทองพันธุ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('221', '3909900265323', 'AE94', 'typeuser', '55สจ00497', 'นางสาว', 'ปิยชนน์', 'ปิยะภาโส', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('222', '3909900660559', 'ammy9559', 'typeuser', '55สจ00621', 'นางสาว', 'อมรรัตน์', 'มะหะพันธุ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('223', '3900700209634', 'T444', 'typeuser', '55สจ00521', 'นาย', 'ชาตรี', 'สุจริตธุระการ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('224', '3900700007438', '88WW', 'typeuser', '55สจ00522', 'นาย', 'อำพล', 'จันทรัตน์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('225', '3770300513061', 'GNUI', 'typeuser', '55สจ00523', 'นาย', 'คำนึง', 'จันทโชติ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('226', '3900100173515', '1619', 'typeuser', '55สจ00524', 'นาย', 'ยงยุทธ', 'ทองเจริญ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('227', '1909900139267', '19031903', 'typeuser', '55สจ00475', 'นางสาว', 'ปิ่นใจ', 'คงขาว', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('228', '1909800020578', '0578', 'typeuser', '55สจ00476', 'นาง', 'จิตลดา', 'สุดเอียด', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('229', '3909900235360', '92526', 'typeuser', '55สจ00528', 'นางสาว', 'ทิยาภัทร', 'รัตนชัย', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('230', '1909900091230', '2529', 'typeuser', '55สจ00529', 'นางสาว', 'พิมพ์ประภัสสร', 'จันทรัตน์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('231', '3909900808696', '4JHG', 'typeuser', '55สจ00563', 'นาง', 'อุทัยทิพย์', 'อำพะสุโร', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('232', '3900100817897', 'TONA', 'typeuser', '55สจ00533', 'นางสาว', 'ปัตมา', 'สุขช่วย', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('233', '3909900657892', 'Q8R3', 'typeuser', '55สจ00535', 'นาง', 'เบญจา', 'แสงอ่อน', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('234', '3910300007597', 'KJ25NU', 'typeuser', '55สจ00536', 'นางสาว', 'วราภรณ์', 'พรมสี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('235', '3909900036847', 'VPAA', 'typeuser', '55สจ00537', 'นางสาว', 'สุนิสา', 'ทวีสุข', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('236', '3900900423958', 'Q4C6', 'typeuser', '55สจ00518', 'นาง', 'นุชจรีย์', 'สุมณฑา', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('237', '1909800631542', '1542', 'typeuser', '55สจ00477', 'นาย', 'อนิศ', 'ตาเดอิน', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('238', '3909900455912', '5RT4', 'typeuser', '55สจ00461', 'นางสาว', 'รติกร', 'ทองเนื้อแข็ง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('239', '1909900107021', 'S3396', 'typeuser', '55สจ00531', 'นาง', 'ปวีณา', 'บุญสงค์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('240', '1939900093828', 'MKPH', 'typeuser', '55สจ00542', 'นางสาว', 'ประภาพร', 'เพชรรักษ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('241', '3900100258162', '9999', 'typeuser', '55สจ00551', 'นาย', 'กมล', 'ถีราวุฒิ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('242', '3900100068363', '9999', 'typeuser', '55สจ00552', 'นาย', 'สุชาติ', 'วุฒิพันธุ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('243', '3900100419221', 'GENT', 'typeuser', '55สจ00553', 'นาง', 'กิ่งดาว', 'ทราเนตร', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('244', '3969800006407', '6407', 'typeuser', '55สจ00554', 'นางสาว', 'ญาดาภาสินี', 'มั่งมี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('245', '3900200162264', '2514', 'typeuser', '55สจ00557', 'นางสาว', 'สิรภัทร', 'ไชยจิตร์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('246', '1909900228251', '1432', 'typeuser', '55สจ00558', 'นางสาว', 'ระวิวรรณ', 'บุญฤทธิ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('247', '3909900794148', 'E248', 'typeuser', '55สจ00559', 'นางสาว', 'อุไรวรรณ', 'แจ้งศุภผล', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('248', '3909800049424', 'POOK', 'typeuser', '55สจ00561', 'นางสาว', 'สุภารัตน์', 'หนูเอียด', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('249', '3909900253287', '55PQ', 'typeuser', '55สจ00456', 'นางสาว', 'พีระวรรณ', 'วีระประดิษฐ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('250', '3900300427600', 'TAN124102516', 'typeuser', '55สจ00457', 'นางสาว', 'วรรณิกา', 'ทองเจือเพชร', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('251', '3909900035859', '2224', 'typeuser', '55สจ00455', 'นาง', 'ปองขวัญ', 'ไชยพันธ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('252', '3341600590855', '7777', 'typeuser', '55สจ00458', 'นาย', 'สรรชัย', 'เต้าตะโร', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('253', '3900100080312', '9999', 'typeuser', '55สจ00467', 'นาย', 'วิรัตน์', 'ไชยบัญดิษฐ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('254', '3900100747236', '7236', 'typeuser', '55สจ00540', 'นาง', 'ภิญญา', 'รัตนมณี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('255', '3900200361046', '9999', 'typeuser', '55สจ00543', 'นางสาว', 'ภรปวีณ์', 'เตกฉัตร', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('256', '1900300094256', 'S114', 'typeuser', '55สจ00544', 'นางสาว', 'สุอาพร', 'แก้วทอง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('257', '3910100085411', '7565', 'typeuser', '55สจ00566', 'นาง', 'ติมาพร', 'แก้วอัมพร', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('258', '1960200052322', 'WR4D', 'typeuser', '55สจ00567', 'นางสาว', 'นันทนัช', 'ถันอุปถัมภ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('259', '3900100096006', '9999', 'typeuser', '55สจ00484', 'นาง', 'นันทิยา', 'นวลประสงค์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('260', '3919900070310', 'SFE7', 'typeuser', '55สจ00539', 'นาย', 'สุเทพ', 'แก้วอัมพร', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('261', '3900100012554', '9999', 'typeuser', '55สจ00453', 'นาย', 'ประยุทธ', 'ดวงแก้ว', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('262', '3900100585040', 'GBPS', 'typeuser', '55สจ00454', 'นางสาว', 'เกตุวิไล', 'บุญแอ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('263', '3200900777501', 'PUMPUI', 'typeuser', '55สจ00460', 'นางสาว', 'อุไรวรรฬ', 'แก้วมณี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('264', '3900200182991', '2991', 'typeuser', '55สจ00450', 'นางสาว', 'กนิษฐา', 'สิงห์ทอง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('265', '3900200196461', '9999', 'typeuser', '55สจ00451', 'นางสาว', 'ปวริศา', 'สมัครพงศ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('266', '3900900567500', 'sunmee', 'typeuser', '55สจ00545', 'นางสาว', 'อมลกานต์', 'สุขโณ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('267', '3909900776905', 'TT54', 'typeuser', '55สจ00548', 'นาง', 'สุภาณี', 'สิขะโต', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('268', '1909800581839', '1839', 'typeuser', '55สจ00547', 'นางสาว', 'อธิชา', 'สวนแสดง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('269', '1909900204255', 'VPWE', 'typeuser', '55สจ00452', 'นางสาว', 'วิภาวี', 'พุทธชาติ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('270', '1909900393520', '3520', 'typeuser', '55สจ00546', 'นาย', 'ธีรวัฒน์', 'คงชู', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('271', '1900200044443', '2531', 'typeuser', '55สจ00462', 'นาย', 'อภิลักษณ์', 'มีชัย', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('272', '3900100546907', '9999', 'typeuser', '55สจ00575', 'นาง', 'วิลาวัลย์', 'รัตนรัตน์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('273', '5900199002897', 'CLD6', 'typeuser', '55สจ00576', 'นาง', 'สายใจ', 'ปานทอง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('274', '3900100803616', '9999', 'typeuser', '55สจ00489', 'นาง', 'วรรณี', 'นุชรักษา', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('275', '3900200263541', '3541', 'typeuser', '55สจ00568', 'นางสาว', 'สงวน', 'บุญช่วยธรรมกิจ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('276', '3900100011175', '1175', 'typeuser', '55สจ00569', 'นาง', 'ระรื่น', 'ทองเรืองศรี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('277', '3950300268196', '9999', 'typeuser', '55สจ00572', 'นาง', 'ละมัย', 'ศักโต', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('278', '3900100001331', '1331', 'typeuser', '55สจ00574', 'นาย', 'สุพิศ', 'มานะจิตต์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('279', '3909900471349', 'E75P', 'typeuser', '55สจ00474', 'นาย', 'บุญศุกร์', 'วาสนาจุติ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('280', '3900200460842', 'c0842', 'typeuser', '55สจ00464', 'นาย', 'ชำนาญ', 'ซุ้นสุวรรณ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('281', '3909900192938', 'UTAI', 'typeuser', '55สจ00472', 'นาง', 'อุทัย', 'ช่วยสกุล', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('282', '2930600006318', '9999', 'typeuser', '55สจ00468', 'นาย', 'สมนึก', 'ทองสุวรรณ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('283', '1909800073388', '9999', 'typeuser', '55สจ00480', 'นางสาว', 'จุรีรัตน์', 'วิวัฒน์ไพบูลย์กิจ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('284', '3909900293351', '9999', 'typeuser', '55สจ00481', 'นางสาว', 'ชลิตตา', 'ชมชื่น', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('285', '3900100520436', '0436', 'typeuser', '55สจ00571', 'นางสาว', 'รพีพรรณ', 'จันทสระ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('286', '3102400275479', '9999', 'typeuser', '55สจ00583', 'นาง', 'ณภัทร', 'แซ่ลิ่ม', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('287', '3909900471861', '9999', 'typeuser', '55สจ00584', 'นาง', 'ลำใย', 'กำเนิดกลับ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('288', '5909900003741', '3741', 'typeuser', '55สจ00618', 'นาย', 'ภูสิษฐ์', 'นฤภัย', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('289', '3900200154164', '9999', 'typeuser', '55สจ00619', 'นาง', 'ทิพยา', 'ฉิมภักดี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('290', '3900100543215', '2522', 'typeuser', '55สจ00620', 'นางสาว', 'นาฏยา', 'มุณีรัตน์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('291', '1909900177134', '8405', 'typeuser', '55สจ00577', 'นาย', 'ชัยวัฒน์', 'มดแสง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('292', '3950500247109', 'NK8H', 'typeuser', '55สจ00578', 'นาง', 'พรทิพย์', 'ราชเรืองศรี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('293', '3900700604819', '9999', 'typeuser', '55สจ00585', 'นางสาว', 'สายทิพย์', 'เกตุแก้ว', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('294', '1909900274598', '4822', 'typeuser', '55สจ00586', 'นาย', 'ศิวานนท์', 'แสงอ่อน', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('295', '1909900164857', 'TR84', 'typeuser', '55สจ00587', 'นาย', 'โฆษิต', 'รัตนใสแวว', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('296', '3909900255981', '7AE4', 'typeuser', '55สจ00588', 'นางสาว', 'จรรยา', 'พงษ์อักษร', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('297', '3900100167060', '7060', 'typeuser', '55สจ00589', 'นาย', 'เฉวียง', 'สุขกระจ่าง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('298', '3920200446114', 'NVRC', 'typeuser', '55สจ00590', 'นาย', 'ณัฐวัฒน์', 'เรืองชุติโรจน์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('299', '1909900343182', '3182', 'typeuser', '55สจ00591', 'นาย', 'เมธาวัชร์', 'นวลศรี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('300', '3909900211738', 'DC4P', 'typeuser', '55สจ00592', 'นาย', 'เดชา', 'เพ็ญจำรัส', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('301', '3900300438571', '228V', 'typeuser', '55สจ00593', 'นาย', 'ทนง', 'ไชยรัตน์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('302', '1909900106105', '2529', 'typeuser', '55สจ00594', 'นาย', 'ทรงเกียรติ', 'พุทธวงศ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('303', '3900200105155', 'D2K4', 'typeuser', '55สจ00595', 'นาย', 'ทวัธ', 'จันทร์สวาท', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('304', '3900200474371', '9999', 'typeuser', '55สจ00596', 'นางสาว', 'ทิพย์ทิวา', 'ขุนเกตุ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('305', '1909900296907', '6907', 'typeuser', '55สจ00597', 'นาง', 'นิชาภา', 'ทองสาย', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('306', '3909900158021', '9999', 'typeuser', '55สจ00598', 'นาย', 'นิวัฒน์', 'สรรฐมิตร', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('307', '3909900035778', '5778', 'typeuser', '55สจ00599', 'นาย', 'ประยุทธ', 'รักญาติ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('308', '3909900491285', 'ML99', 'typeuser', '55สจ00600', 'นาย', 'ประสิทธิ์', 'แสงอ่อน', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('309', '3801600678006', '8006', 'typeuser', '55สจ00601', 'นาย', 'พีรกานต์', 'มีแต้ม', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('310', '1900700093371', '2323', 'typeuser', '55สจ00602', 'นางสาว', 'ภัสรา', 'แก้วมณี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('311', '1900100086594', 'W57A', 'typeuser', '55สจ00603', 'นาย', 'ภูมิพงศ์', 'มุณีบังเกิด', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('312', '3900200279510', '2507', 'typeuser', '55สจ00604', 'นาย', 'มีชัย', 'เต็มพร้อมพรรณ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('313', '1909900178041', 'MSN9', 'typeuser', '55สจ00605', 'นางสาว', 'มีนา', 'สิงหาด', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('314', '3909900448959', '1234', 'typeuser', '55สจ00606', 'นางสาว', 'เยาวลักษณ์', 'บุญชุม', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('315', '1909900007654', '9999', 'typeuser', '55สจ00607', 'นาย', 'วรศักดิ์', 'นัคราเรือง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('316', '3901101316612', '9999', 'typeuser', '55สจ00609', 'นาย', 'ศกร', 'ยอดมุณี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('317', '3900700496790', '89RT', 'typeuser', '55สจ00610', 'นาย', 'สมเกียรติ', 'วงษ์บำรุงเทวี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('318', '3900100082528', '3RT9', 'typeuser', '55สจ00611', 'นางสาว', 'สมนึก', 'เจริญสุข', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('319', '3900200154172', '2548', 'typeuser', '55สจ00613', 'นาย', 'อนัน', 'พุ่มคง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('320', '3900200175188', '9999', 'typeuser', '55สจ00614', 'นาง', 'อรุณี', 'มีชัย', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('321', '3900100240565', '9999', 'typeuser', '55สจ00615', 'นางสาว', 'อานิตย์', 'สุชาติ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('322', '3909900496279', '9999', 'typeuser', '55สจ00616', 'นาย', 'อุดร', 'สงวนเผ่า', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('323', '3909900169201', 'OLTK', 'typeuser', '55สจ00617', 'นาย', 'โอฬาร', 'ทองขาว', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('324', '3769900251901', '9999', 'typeuser', '55สจ00623', 'นาย', 'โกศล', 'เจียมอนิวรรต', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('325', '3900700683166', '2520', 'typeuser', '55สจ00624', 'นางสาว', 'จันทร์จิรา', 'สังข์ทอง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('326', '1440600130961', 'K5100', 'typeuser', '55สจ00626', 'นาย', 'มณเฑียร', 'อัคลา', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('327', '3909900220664', 'RNKO', 'typeuser', '55สจ00627', 'นาย', 'รณรงค์', 'คงสะอาด', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('328', '3930600031825', '4444', 'typeuser', '55สจ00628', 'นาย', 'วินิจ', 'สุภเพียร', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('329', '3909900397149', '9999', 'typeuser', '55สจ00629', 'นาย', 'สุวัฒ', 'อนุวรรค', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('330', '1909900046404', '2121', 'typeuser', '55สจ00580', 'นางสาว', 'ดารีรัตน์', 'บุญธรรม', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('331', '3900100275768', '8PK6', 'typeuser', '55สจ00581', 'นาง', 'ภาณิชา', 'มณีรัตน์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('332', '3900100012589', 'K369', 'typeuser', '55สจ00582', 'นาง', 'ยุวดี', 'รอดสงค์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('333', '2900200001751', '2489', 'typeuser', '55สจ00579', 'นาง', 'สายฝน', 'สุขเมตตา', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('334', '1640100125339', 'natthida', 'typeuser', '10532', 'นางสาว', 'ณัฐธิดา', 'แย้มยิ้ม', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('335', '3900900463127', 'JHK4', 'typeuser', '10655', 'นาง', 'จรีรัตน์', 'สมใจ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('336', '1909800335111', '1311', 'typeuser', '10650', 'นางสาว', 'ปรียาภรณ์', 'บุญเลิศ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('337', '3909900112381', '25DU', 'typeuser', '10137', 'นาย', 'สมชาย', 'ศุภเวช', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('338', '1929900111711', '4PU5', 'typeuser', '10263', 'นาง', 'ภันทิลา', 'ชาญณรงค์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('339', '3900200169684', 'JRAN', 'typeuser', '10861', 'นาย', 'จรัญ', 'ฤทธิ์เดช', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('340', '1809900065647', '3628', 'typeuser', '10653', 'นางสาว', 'นภาพร', 'มะลิสง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('341', '3930100017742', '6CW5', 'typeuser', '10652', 'นาง', 'อชิรญาณ์', 'หมัดหมาน', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('342', '1920100001408', '7799', 'typeuser', '10458', 'นาย', 'เอกพงษ์', 'ชูทอง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('343', '3960600292009', 'NSLM', 'typeuser', '10529', 'นางสาว', 'นิจตรา', 'ละหะมะ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('344', '3450400299471', '2521', 'typeuser', '10135', 'นาง', 'พุทธิมา', 'จุนาพงศ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('345', '3909900572358', '2358', 'typeuser', '10651', 'นาง', 'สุภารัตน์', 'ชูช่วย', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('346', '1909700035824', 'koko', 'typeuser', '10533', 'นาย', 'บัณฑิต', 'คงประสิทธิ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('347', '1909800133143', '1234', 'typeuser', '10303', 'นาง', 'เบญจมาศ', 'แก้วกับทอง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('348', '3900500294034', 'ANBR', 'typeuser', '10528', 'นางสาว', 'อัญชลี', 'บุญรัตนา', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('349', '3909900081028', '8SN4', 'typeuser', '10071', 'นาง', 'ธนวรรณ', 'บุญทวี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('350', '1969900075811', 'TUALEK', 'typeuser', '10136', 'นางสาว', 'สุรัตนา', 'มะดาอิง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('351', '1909900131649', 'KNIT', 'typeuser', '10750', 'นางสาว', 'นิฏฐา', 'กาญจนโชติ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('352', '1930800007476', '2893', 'typeuser', '10457', 'นางสาว', 'วิยดา', 'วุ่นบุญชู', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('353', '1809900296291', '2269', 'typeuser', '10531', 'นางสาว', 'วันเพ็ญ', 'เชตุวัน', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('354', '1909900387929', '7929', 'typeuser', '10524', 'นางสาว', 'อาซีซ๊ะ', 'นุหลี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('355', '3909900781208', '5PPG', 'typeuser', '10217', 'นาย', 'วัฒนา', 'คงยัง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('356', '3420900975670', '4001', 'typeuser', '10262', 'นางสาว', 'อภิญญา', 'บัวระภา', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('357', '3900200185736', '5736', 'typeuser', '10456', 'นาง', 'ชะอ้อน', 'แก่นทอง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('358', '3909900210006', 'DNV9', 'typeuser', '10656', 'นาย', 'วีระ', 'หนูรัตน์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('359', '3900700520755', 'kung', 'typeuser', '10121', 'นางสาว', 'นิตทยา', 'ทองสงฆ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('360', '1909800402799', '4744', 'typeuser', '10654', 'นางสาว', 'พรรณอร', 'จิตรวัชรกุล', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('361', '5909999023251', '2510', 'typeuser', '10792', 'นาง', 'ชุติกาญจน์', 'พงศ์เกื้อ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('362', '1909900089448', '9448', 'typeuser', '10936', 'นางสาว', 'ณัฏฐิณี', 'สังข์แก้ว', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('363', '2901500001625', 'PORN', 'typeuser', '10937', 'นางสาว', 'จิราภรณ์', 'กำเนิดกลับ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('364', '3900100051371', '1371', 'typeuser', '1754', 'นาย', 'ธวัชชัย', 'เพ็ชรยอด', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('365', '3909900472612', '2511', 'typeuser', '1763', 'นาย', 'ประจักษ์', 'จันทร์ไฝ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('366', '3900100765617', '5617', 'typeuser', '1764', 'นาย', 'เขต', 'จิตต์ภักดี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('367', '3900100110360', '10360', 'typeuser', '1766', 'นาย', 'โชค', 'ถีราวุฒิ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('368', '3909900331971', '1971', 'typeuser', '1769', 'นาง', 'มณฑา', 'มากศรี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('369', '3909900102459', '2459', 'typeuser', '1772', 'นาง', 'วราภรณ์', 'กายพันธ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('370', '3900200217735', '2531', 'typeuser', '1775', 'นาย', 'วิชัย', 'มีชัย', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('371', '3909900100677', 'K2L9', 'typeuser', '1776', 'นาง', 'สุวิมล', 'เพ็ชรมงคล', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('372', '3930100584752', null, 'typeuser', '1778', 'นางสาว', 'เสาวณีย์', 'นุ่นปาน', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('373', '3900200107255', '7255', 'typeuser', '1779', 'นาง', 'รัตติยา', 'พิรุณละออง', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('374', '3920100194229', '4229', 'typeuser', '1785', 'นาง', 'จำเนียร', 'อุตมะมุณีย์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('375', '3909900035735', '5735', 'typeuser', '1787', 'นาง', 'สมปอง', 'จันทร์เพศ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('376', '3909900472736', 'LN65', 'typeuser', '1790', 'นาย', 'สุระสิทธิ์', 'เกษรักษ์', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('377', '3900800103749', 'CVJP', 'typeuser', '1795', 'นาย', 'มนพ', 'อินทโน', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('378', '3909900151913', '12TT', 'typeuser', '1803', 'นาย', 'จรูญ', 'จันทร์ไฝ', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('379', '3900800167852', '7852', 'typeuser', '1805', 'นาย', 'ธีระพงษ์', 'ทองช่วย', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('380', '3900100237106', 'CV45', 'typeuser', '1809', 'นาย', 'ยุทธ', 'สุระวี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('381', '3909900102106', '2106', 'typeuser', '1814', 'นาง', 'เสริมสุข', 'มังคลา', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('382', '4909900005991', '18UY', 'typeuser', '1820', 'นาย', 'มิตร', 'นวลศรี', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('383', '3909900265315', '5315', 'typeuser', '1824', 'นาง', 'พรนิษา', 'ดวงจินดา', null, null, null, null, 'Y');
INSERT INTO `person` VALUES ('384', '3800100013594', 'SD54', 'typeuser', null, 'นางสาว', 'จิตติมา', 'แกล้วทนง', null, null, 'K3', null, 'Y');

-- ----------------------------
-- Table structure for position
-- ----------------------------
DROP TABLE IF EXISTS `position`;
CREATE TABLE `position` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `position_code` varchar(8) DEFAULT NULL,
  `position_name` varchar(150) DEFAULT NULL,
  `position_type_group` varchar(2) DEFAULT NULL,
  `position_type_group_range` varchar(10) DEFAULT NULL,
  `group_occupation` varchar(2) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of position
-- ----------------------------
INSERT INTO `position` VALUES ('1', 'G6_1', 'นักกายภาพบำบัด', 'K', 'K1-K4', 'G6', 'Y');
INSERT INTO `position` VALUES ('2', 'G6_2', 'นักกิจกรรมบำบัด', 'K', 'K1-K4', 'G6', 'Y');
INSERT INTO `position` VALUES ('3', 'G6_3', 'นักจิตวิทยา', 'K', 'K1-K4', 'G6', 'Y');
INSERT INTO `position` VALUES ('4', 'G6_4', 'นักจิตวิทยาคลินิก', 'K', 'K1-K4', 'G6', 'Y');
INSERT INTO `position` VALUES ('5', 'G6_5', 'ทันตแพทย์', 'K', 'K1-K5', 'G6', 'Y');
INSERT INTO `position` VALUES ('6', 'G6_6', 'นักเทคนิคการแพทย์', 'K', 'K1-K4', 'G6', 'Y');
INSERT INTO `position` VALUES ('7', 'G6_7', 'พยาบาลวิชาชีพ', 'K', 'K1-K4', 'G6', 'Y');
INSERT INTO `position` VALUES ('8', 'G6_8', 'นายแพทย์', 'K', 'K1-K5', 'G6', 'Y');
INSERT INTO `position` VALUES ('9', 'G6_9', 'นักการแพทย์แผนไทย', 'K', 'K1-K3', 'G6', 'Y');
INSERT INTO `position` VALUES ('10', 'G6_10', 'เภสัชกร', 'K', 'K1-K4', 'G6', 'Y');
INSERT INTO `position` VALUES ('11', 'G6_11', 'นักโภชนาการ', 'K', 'K1-K4', 'G6', 'Y');
INSERT INTO `position` VALUES ('12', 'G6_12', 'นักรังสีการแพทย์', 'K', 'K1-K4', 'G6', 'Y');
INSERT INTO `position` VALUES ('13', 'G6_13', 'นักวิชาการพยาบาล', 'K', 'K1-K4', 'G6', 'Y');
INSERT INTO `position` VALUES ('14', 'G6_14', 'นักวิชาการสาธารณสุข', 'K', 'K1-K5', 'G6', 'Y');
INSERT INTO `position` VALUES ('15', 'G6_15', 'นักอาชีวบำบัด', 'K', 'K1-K3', 'G6', 'Y');
INSERT INTO `position` VALUES ('16', 'G6_16', 'นักวิชาการอาหารและยา', 'K', 'K1-K5', 'G6', 'Y');
INSERT INTO `position` VALUES ('17', 'G6_17', 'นักวิทยาศาสตร์การแพทย์', 'K', 'K1-K5', 'G6', 'Y');
INSERT INTO `position` VALUES ('18', 'G6_18', 'นักเวชศาสตร์การสื่อความหมาย', 'K', 'K1-K3', 'G6', 'Y');
INSERT INTO `position` VALUES ('19', 'G1_19', 'นักบริหาร', 'S', 'S1-S2', 'G1', 'Y');
INSERT INTO `position` VALUES ('20', 'G1_20', 'ผู้ตรวจราชการกระทรวง', 'S', 'S2', 'G1', 'Y');
INSERT INTO `position` VALUES ('21', 'G1_21', 'ผู้อำนวยการ', 'M', 'M1-M2', 'G1', 'Y');
INSERT INTO `position` VALUES ('22', 'G1_22', 'ผู้อำนวยการเฉพาะด้าน(แพทย์)', 'M', 'M1-M2', 'G1', 'Y');
INSERT INTO `position` VALUES ('23', 'G1_23', 'ผู้ตรวจราชการกรม', 'M', 'M2', 'G1', 'Y');
INSERT INTO `position` VALUES ('24', 'G1_24', 'นักจัดการงานทั่วไป', 'K', 'K1-K3', 'G1', 'Y');
INSERT INTO `position` VALUES ('25', 'G1_25', 'นักทรัพยากรบุคคล', 'K', 'K1-K5', 'G1', 'Y');
INSERT INTO `position` VALUES ('26', 'G1_26', 'นิติกร', 'K', 'K1-K5', 'G1', 'Y');
INSERT INTO `position` VALUES ('27', 'G1_27', 'นักวิเคราะห์นโยบายและแผน', 'K', 'K1-K5', 'G1', 'Y');
INSERT INTO `position` VALUES ('28', 'G1_28', 'นักวิชาการคอมพิวเตอร์', 'K', 'K1-K5', 'G1', 'Y');
INSERT INTO `position` VALUES ('29', 'G1_29', 'นักเทคโนโลยีสารสนเทศ', 'K', 'K1-K4', 'G1', 'Y');
INSERT INTO `position` VALUES ('30', 'G1_30', 'นักวิชาการพัสดุ', 'K', 'K1-K3', 'G1', 'Y');
INSERT INTO `position` VALUES ('31', 'G1_31', 'นักวิชาการสถิติ', 'K', 'K1-K4', 'G1', 'Y');
INSERT INTO `position` VALUES ('32', 'G2_32', 'นักวิชาการเงินและบัญชี', 'K', 'K1-K4', 'G2', 'Y');
INSERT INTO `position` VALUES ('33', 'G3_33', 'นักประชาสัมพันธ์', 'K', 'K1-K4', 'G3', 'Y');
INSERT INTO `position` VALUES ('34', 'G3_34', 'นักวิชาการเผยแพร่', 'K', 'K1-K3', 'G3', 'Y');
INSERT INTO `position` VALUES ('35', 'G3_35', 'นักวิชาการโสตทัศนศึกษา', 'K', 'K1-K3', 'G3', 'Y');
INSERT INTO `position` VALUES ('36', 'G8_36', 'บรรณารักษ์', 'K', 'K1-K3', 'G8', 'Y');
INSERT INTO `position` VALUES ('37', 'G8_37', 'นักวิชาการศึกษา', 'K', 'K1-K5', 'G8', 'Y');
INSERT INTO `position` VALUES ('38', 'G8_38', 'นักสังคมสงเคราะห์', 'K', 'K1-K4', 'G8', 'Y');
INSERT INTO `position` VALUES ('39', 'G1_39', 'เจ้าพนักงานธุรการ', 'O', 'O1-O3', 'G1', 'Y');
INSERT INTO `position` VALUES ('40', 'G1_40', 'เจ้าพนักงานพัสดุ', 'O', 'O1-O3', 'G1', 'Y');
INSERT INTO `position` VALUES ('41', 'G1_41', 'เจ้าพนักงานเวชสถิติ', 'O', 'O1-O3', 'G1', 'Y');
INSERT INTO `position` VALUES ('42', 'G1_42', 'เจ้าพนักงานสถิติ', 'O', 'O1-O3', 'G1', 'Y');
INSERT INTO `position` VALUES ('43', 'G2_43', 'เจ้าพนักงานการเงินและบัญชี', 'O', 'O1-O3', 'G2', 'Y');
INSERT INTO `position` VALUES ('44', 'G3_44', 'เจ้าพนักงานเผยแพร่ประชาสัมพันธ์', 'O', 'O1-O3', 'G3', 'Y');
INSERT INTO `position` VALUES ('45', 'G3_45', 'เจ้าพนักงานโสตทัศนศึกษา', 'O', 'O1-O3', 'G3', 'Y');
INSERT INTO `position` VALUES ('46', 'G6_46', 'เจ้าพนักงานทันตสาธารณสุข', 'O', 'O1-O2', 'G6', 'Y');
INSERT INTO `position` VALUES ('47', 'G6_47', 'เจ้าพนักงานเภสัชกรรม', 'O', 'O1-O2', 'G6', 'Y');
INSERT INTO `position` VALUES ('48', 'G6_48', 'โภชนากร', 'O', 'O1-O3', 'G6', 'Y');
INSERT INTO `position` VALUES ('49', 'G6_49', 'เจ้าพนักงานรังสีการแพทย์', 'O', 'O1-O2', 'G6', 'Y');
INSERT INTO `position` VALUES ('50', 'G6_50', 'เจ้าพนักงานวิทยาศาสตร์การแพทย์', 'O', 'O1-O2', 'G6', 'Y');
INSERT INTO `position` VALUES ('51', 'G6_51', 'เจ้าพนักงานเวชกรรมฟื้นฟู', 'O', 'O1-O2', 'G6', 'Y');
INSERT INTO `position` VALUES ('52', 'G6_52', 'เจ้าพนักงานสาธารณสุข', 'O', 'O1-O3', 'G6', 'Y');
INSERT INTO `position` VALUES ('53', 'G6_53', 'เจ้าพนักงานอาชีวบำบัด', 'O', 'O1-O2', 'G6', 'Y');
INSERT INTO `position` VALUES ('54', 'G6_54', 'พยาบาลเทคนิค', 'O', 'O1-O2', 'G6', 'Y');
INSERT INTO `position` VALUES ('55', 'G7_55', 'เจ้าพนักงานเครื่องคอมพิวเตอร์', 'O', 'O1-O3', 'G7', 'Y');
INSERT INTO `position` VALUES ('56', 'G7_56', 'นายช่างเทคนิค', 'O', 'O1-O3', 'G7', 'Y');
INSERT INTO `position` VALUES ('57', 'G7_57', 'นายช่างไฟฟ้า', 'O', 'O1-O3', 'G7', 'Y');

-- ----------------------------
-- Table structure for province
-- ----------------------------
DROP TABLE IF EXISTS `province`;
CREATE TABLE `province` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `province_code` varchar(2) DEFAULT NULL,
  `province_name` varchar(150) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of province
-- ----------------------------
INSERT INTO `province` VALUES ('1', '01', 'กระบี่', 'Y');
INSERT INTO `province` VALUES ('2', '02', 'กรุงเทพมหานคร', 'Y');
INSERT INTO `province` VALUES ('3', '03', 'กาญจนบุรี', 'Y');
INSERT INTO `province` VALUES ('4', '04', 'กาฬสินธุ์', 'Y');
INSERT INTO `province` VALUES ('5', '05', 'กำแพงเพชร', 'Y');
INSERT INTO `province` VALUES ('6', '06', 'ขอนแก่น', 'Y');
INSERT INTO `province` VALUES ('7', '07', 'จันทบุรี', 'Y');
INSERT INTO `province` VALUES ('8', '08', 'ฉะเชิงเทรา', 'Y');
INSERT INTO `province` VALUES ('9', '09', 'ชลบุรี', 'Y');
INSERT INTO `province` VALUES ('10', '10', 'ชัยนาท', 'Y');
INSERT INTO `province` VALUES ('11', '11', 'ชัยภูมิ', 'Y');
INSERT INTO `province` VALUES ('12', '12', 'ชุมพร', 'Y');
INSERT INTO `province` VALUES ('13', '13', 'เชียงราย', 'Y');
INSERT INTO `province` VALUES ('14', '14', 'เชียงใหม่', 'Y');
INSERT INTO `province` VALUES ('15', '15', 'ตรัง', 'Y');
INSERT INTO `province` VALUES ('16', '16', 'ตราด', 'Y');
INSERT INTO `province` VALUES ('17', '17', 'ตาก', 'Y');
INSERT INTO `province` VALUES ('18', '18', 'นครนายก', 'Y');
INSERT INTO `province` VALUES ('19', '19', 'นครปฐม', 'Y');
INSERT INTO `province` VALUES ('20', '20', 'นครพนม', 'Y');
INSERT INTO `province` VALUES ('21', '21', 'นครราชสีมา', 'Y');
INSERT INTO `province` VALUES ('22', '22', 'นครศรีธรรมราช', 'Y');
INSERT INTO `province` VALUES ('23', '23', 'นครสวรรค์', 'Y');
INSERT INTO `province` VALUES ('24', '24', 'นนทบุรี', 'Y');
INSERT INTO `province` VALUES ('25', '25', 'นราธิวาส', 'Y');
INSERT INTO `province` VALUES ('26', '26', 'น่าน', 'Y');
INSERT INTO `province` VALUES ('27', '27', 'บุรีรัมย์', 'Y');
INSERT INTO `province` VALUES ('28', '28', 'ปทุมธานี', 'Y');
INSERT INTO `province` VALUES ('29', '29', 'ประจวบคีรีขันธ์', 'Y');
INSERT INTO `province` VALUES ('30', '30', 'ปราจีนบุรี', 'Y');
INSERT INTO `province` VALUES ('31', '31', 'ปัตตานี', 'Y');
INSERT INTO `province` VALUES ('32', '32', 'พระนครศรีอยุธยา', 'Y');
INSERT INTO `province` VALUES ('33', '33', 'พะเยา', 'Y');
INSERT INTO `province` VALUES ('34', '34', 'พังงา', 'Y');
INSERT INTO `province` VALUES ('35', '35', 'พัทลุง', 'Y');
INSERT INTO `province` VALUES ('36', '36', 'พิจิตร', 'Y');
INSERT INTO `province` VALUES ('37', '37', 'พิษณุโลก', 'Y');
INSERT INTO `province` VALUES ('38', '38', 'เพชรบุรี', 'Y');
INSERT INTO `province` VALUES ('39', '39', 'เพชรบูรณ์', 'Y');
INSERT INTO `province` VALUES ('40', '40', 'แพร่', 'Y');
INSERT INTO `province` VALUES ('41', '41', 'ภูเก็ต', 'Y');
INSERT INTO `province` VALUES ('42', '42', 'มหาสารคาม', 'Y');
INSERT INTO `province` VALUES ('43', '43', 'มุกดาหาร', 'Y');
INSERT INTO `province` VALUES ('44', '44', 'แม่ฮ่องสอน', 'Y');
INSERT INTO `province` VALUES ('45', '45', 'ยโสธร', 'Y');
INSERT INTO `province` VALUES ('46', '46', 'ยะลา', 'Y');
INSERT INTO `province` VALUES ('47', '47', 'ร้อยเอ็ด', 'Y');
INSERT INTO `province` VALUES ('48', '48', 'ระนอง', 'Y');
INSERT INTO `province` VALUES ('49', '49', 'ระยอง', 'Y');
INSERT INTO `province` VALUES ('50', '50', 'ราชบุรี', 'Y');
INSERT INTO `province` VALUES ('51', '51', 'ลพบุรี', 'Y');
INSERT INTO `province` VALUES ('52', '52', 'เลย', 'Y');
INSERT INTO `province` VALUES ('53', '53', 'ลำปาง', 'Y');
INSERT INTO `province` VALUES ('54', '54', 'ลำพูน', 'Y');
INSERT INTO `province` VALUES ('55', '55', 'ศีรสะเกษ', 'Y');
INSERT INTO `province` VALUES ('56', '56', 'สกลนคร', 'Y');
INSERT INTO `province` VALUES ('57', '57', 'สงขลา', 'Y');
INSERT INTO `province` VALUES ('58', '58', 'สตูล', 'Y');
INSERT INTO `province` VALUES ('59', '59', 'สมุทรปราการ', 'Y');
INSERT INTO `province` VALUES ('60', '60', 'สมุทรสงคราม', 'Y');
INSERT INTO `province` VALUES ('61', '61', 'สมุทรสาคร', 'Y');
INSERT INTO `province` VALUES ('62', '62', 'สระแก้ว', 'Y');
INSERT INTO `province` VALUES ('63', '63', 'สระบุรี', 'Y');
INSERT INTO `province` VALUES ('64', '64', 'สิงห์บุรี', 'Y');
INSERT INTO `province` VALUES ('65', '65', 'สุโขทัย', 'Y');
INSERT INTO `province` VALUES ('66', '66', 'สุพรรณบุรี', 'Y');
INSERT INTO `province` VALUES ('67', '67', 'สุราษฎร์ธานี', 'Y');
INSERT INTO `province` VALUES ('68', '68', 'สุรินทร์', 'Y');
INSERT INTO `province` VALUES ('69', '69', 'หนองคาย', 'Y');
INSERT INTO `province` VALUES ('70', '70', 'หนองบัวลำภู', 'Y');
INSERT INTO `province` VALUES ('71', '71', 'อ่างทอง', 'Y');
INSERT INTO `province` VALUES ('72', '72', 'อำนาจเจริญ', 'Y');
INSERT INTO `province` VALUES ('73', '73', 'อุดรธานี', 'Y');
INSERT INTO `province` VALUES ('74', '74', 'อุตรดิตถ์', 'Y');
INSERT INTO `province` VALUES ('75', '75', 'อุทัยธานี', 'Y');
INSERT INTO `province` VALUES ('76', '76', 'อุบลราชธานี', 'Y');
